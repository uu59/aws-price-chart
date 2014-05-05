module.exports = {
  params: function(arg){
    return arg ? setParams(arg) : getParams();
  },
  select: function(elm, value) {
    elm.selectedIndex = -1;
    Array.prototype.forEach.call(elm.options, function(option, i){
      option.selected = (option.value === value);
    });
  },
  t: function(key) {
    var table = {
      "od": "on-demand",
      "ri-light1y": "Light 1 Year",
      "ri-light3y": "Light 3 Year",
      "ri-medium1y": "Medium 1 Year",
      "ri-medium3y": "Medium 3 Year",
      "ri-heavy1y": "Heavy 1 Year",
      "ri-heavy3y": "Heavy 3 Year"
    };
    return table[key] || key;
  }
};

function getParams() {
  return location.hash.slice(1).split('&').reduce(function(prev, current){
    var tmp = current.split('=', 2);
    prev[tmp[0]] = tmp[1];
    return prev;
  }, {});
}

function setParams(hash) {
  var t = Object.keys(hash).reduce(function(prev, current){
    prev.push(current + "=" + hash[current]);
    return prev;
  }, []).join("&");
  location.hash = t;
}
