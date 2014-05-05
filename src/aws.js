var rawdata = {
  "od": require("../json/linux-od.json"),
  "ri-light": require("../json/linux-ri-light.json"),
  "ri-medium": require("../json/linux-ri-medium.json"),
  "ri-heavy": require("../json/linux-ri-heavy.json"),
};

function canonicalizeRegionName(name) {
  var table = {
    "us-east": "us-east-1",
    "us-west": "us-west-1",
    "apac-tokyo": "ap-northeast-1",
    "apac-sin": "ap-southeast-1",
    "apac-syd": "ap-southeast-2",
    "eu-ireland": "eu-west-1"
  };
  return table[name] || name;
}

function fetchJSON(key) {
  return new Promise(function(resolve, reject){
    var planData = rawdata[key];
    if(planData) {
      planData.plan = key;
      resolve(planData);
    }else{
      throw new Error('unknow key: ' + key);
    }
  }).catch(function(e){
    console.error(e.stack);
  });;
}

function fetchRegions(plan) {
  return fetchJSON(plan || "od").then(function(data){
    return data.config.regions;
  });
}

function fetchRegionNames() {
  return fetchRegions().then(function(regions){
    return regions.map(function(r) {
      return canonicalizeRegionName(r.region);
    });
  });
}

function fetchInstanceSizes(region) {
  region = canonicalizeRegionName(region || "us-east");
  return fetchRegions().then(function(regions){
    var types = regions.filter(function(r){
      return canonicalizeRegionName(r.region) == region;
    })[0].instanceTypes;
    var result = [];
    types.forEach(function(type){
      type.sizes.forEach(function(size){
        result.push({
          "size": size.size, // m3.medium
          "price": size.valueColumns[0].prices.USD, // 0.070
          "region": region
        });
      });
    });
    return result;
  });
}

function formatPrices(valueColumns, plan) {
  if(plan === "od") { // on-demand instance
    return [{
      "plan": plan,
      "type": "on-demand",
      "once": 0,
      "hourly": +valueColumns[0].prices.USD
    }];
  }

  var prices = [];
  var tmp = {};
  valueColumns.forEach(function(value){
    tmp[value.name] = value;
  });
  prices.push({
    "plan": plan + "1y",
    "type": "1y",
    "once": +tmp.yrTerm1.prices.USD,
    "hourly": +tmp.yrTerm1Hourly.prices.USD
  })
  prices.push({
    "plan": plan + "3y",
    "type": "3y",
    "once": +tmp.yrTerm3.prices.USD,
    "hourly": +tmp.yrTerm3Hourly.prices.USD
  })
  return prices;
}

function fetchFlattenData(plan) {
  return fetchJSON(plan || "od").then(function(json){
    var result = [];
    json.config.regions.forEach(function(region){
      region.instanceTypes.forEach(function(type){
        type.sizes.forEach(function(size){
          result.push({
            "plan": json.plan, // od, ri-light, etc
            "size": size.size, // m3.medium
            "prices": formatPrices(size.valueColumns, json.plan),
            "region": canonicalizeRegionName(region.region)
          });
        });
      });
    });
    return result;
  });
}

function fetchFlattenAllData() {
  return Promise.all(Object.keys(rawdata).map(fetchFlattenData)).then(function(data){
    return Array.prototype.concat.apply([], data);
  });
}

module.exports = {
  fetchFlattenAllData: fetchFlattenAllData,
  fetchRegions: fetchRegions,
  fetchRegionNames: fetchRegionNames,
  fetchInstanceSizes: fetchInstanceSizes
};
