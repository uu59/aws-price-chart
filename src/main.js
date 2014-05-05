var AWS = require("./aws");
var util = require("./util");
var info = require("../info.json");
var MONTHS = 40;

function init() {
  document.querySelector('#info').innerHTML = 'last modified AWS JSON at ' + info.lastModified;
  var selRegion = document.querySelector('#regions');

  function chooseRegion(){
    var region = selRegion.options[selRegion.selectedIndex].value;
    AWS.fetchInstanceSizes(region).then(function(sizes){
      var selSize = document.querySelector('#sizes');
      selSize.innerHTML = "<option>--</option>";
      sizes.forEach(function(size){
        selSize.innerHTML += '<option value="'+size.size+'">'+size.size+'</option>';
      });

      if(util.params().size){
        util.select(selSize, util.params().size);
        chooseSize();
      }
      selSize.addEventListener('change', chooseSize, false);
    });
  }

  function chooseSize() {
    var selSize = document.querySelector('#sizes');
    var size = selSize.options[selSize.selectedIndex].value;
    var region = selRegion.options[selRegion.selectedIndex].value;
    if(region && size) {
      util.params({
        region: region,
        size: size
      });
      draw();
    }
  }

  selRegion.addEventListener('change', chooseRegion, false);

  AWS.fetchRegionNames().then(function(regions){
    selRegion.innerHTML = "<option selected>--</option>";
    regions.forEach(function(region){
      selRegion.innerHTML += '<option value="'+region+'">'+region+'</option>';
    });
    if(util.params().region) {
      util.select(selRegion, util.params().region);
      chooseRegion();
    }
  });
}

function fetchPriceData() {
  var tmp = document.querySelector('#regions');
  var region = tmp.options[tmp.selectedIndex].value;
  var tmp = document.querySelector('#sizes');
  var size = tmp.options[tmp.selectedIndex].value;
  return AWS.fetchFlattenAllData().then(function(data){
    return data.filter(function(d){
      return d.region === region && d.size === size;
    });
  }).then(function(data){
    var formatted = data.map(function(d){
      return d.prices.map(function(price){
        var values = [];
        var sum = price.once;
        for(var i=0; i<=MONTHS; i++){
          if(i > 1 && (i % 12) === 1 && price.plan.match(/1y$/)){
            sum += price.once;
          }
          sum += (price.hourly * 24 * 30);
          values.push({x: i, y: Math.floor(sum * 100) / 100});
        }
        return {
          key: util.t(price.plan) + " / " + size,
          values: values
        };
      });
    });
    return Array.prototype.concat.apply([], formatted);
  }).catch(function(e){
    console.error(e.stack);
  });
}

function draw() {
  nv.addGraph(function() {
    var chart = nv.models.lineWithFocusChart();
    chart.tooltipContent(function(key, x, y){
       return '<h3>' + key + '</h3>' +
               '<p>USD $' +  y + ' at ' + x + ' months</p>'
    });

    chart.xAxis
      .axisLabel('Month(s)')
      .tickValues(d3.range(0, MONTHS, 1))
      ;
    chart.x2Axis
      .tickValues(d3.range(0, MONTHS, 1))
      ;

    chart.yAxis
      .tickFormat(d3.format(',.2f'))
      ;

    chart.y2Axis
      .axisLabel('USD(total)')
      .tickFormat(d3.format(',.2f'))
      ;

    fetchPriceData().then(function(prices){
      d3.select('#chart svg')
          .datum(prices)
          .transition().duration(500)
          .call(chart);
    });

    nv.utils.windowResize(chart.update);

    return chart;
  });
}

init();
