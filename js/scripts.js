$(document).ready(function() {

  // Geolocation API
  var long;
  var lat;
  $.getJSON("http://ip-api.com/json", function(data2) {
    lat = data2.lat;
    long = data2.lon;
    kelvin = data2.temp;
    var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=7cbb2b489db1d50a188cdce2b112d63a";

    // Weather API:
    $.getJSON(api, function(data) {
      var city = data.name;
      var weatherType = data.weather[0].description;
      var kTemp = data.main.temp;
      var fTemp = Math.round((kTemp - 273) * (9 / 5) + 32);
      var cTemp = (kTemp - 273).toFixed(1);
      var tempSwap = true;
      var windSpeedMph = (2.237 * (data.wind.speed)).toFixed(1);
      var windSpeedKph = ((2.237 * (data.wind.speed)) * 1.6).toFixed(1);
      var windSwap = true;
      var weatherId = data.weather[0].id;

      // Buttons:
      $("#city").html(city);

      $("#weatherType").html(weatherType);

      //Temperature button:
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function() {
        if (tempSwap === false) {
          $("#fTemp").html(fTemp + " &#8457;");
          tempSwap = true;
        } else {
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap = false;
        }
      });
      //Wind speed button:
      $("#windSpeedMph").html(windSpeedMph + " mph");
      $("#windSpeedMph").click(function() {
        if (windSwap === false) {
          $("#windSpeedMph").html(windSpeedMph + " mph");
          windSwap = true;
        } else {
          $("#windSpeedMph").html(windSpeedKph + " km/h");
          windSwap = false;
        }
      });

      //Background images:
      if (weatherId > 899) {
        $("body").css("background-image", "url(http://orig12.deviantart.net/3067/f/2008/320/f/3/bois_de_cise_4_by_eric_tff.jpg)");
      } else if (weatherId > 800) {
        $("body").css("background-image", "url(http://orig12.deviantart.net/7fd4/f/2012/175/9/3/931e1a8268400214a8d787f6eb1b377d-d54q385.jpg)");
      } else if (weatherId === 800) {
        $("body").css("background-image", "url(http://orig11.deviantart.net/bbf1/f/2016/305/9/b/9bb3b4075aad8bf696df4a811e933b45-dan1c68.jpg)");
      } else if (weatherId > 699) {
        $("body").css("background-image", "url(http://orig09.deviantart.net/4b6b/f/2011/239/4/9/4907468637ca41e5f5b46d3a6d969abb-d2adb5n.jpg)");
      } else if (weatherId > 599) {
        $("body").css("background-image", "url(http://img09.deviantart.net/a755/i/2004/277/1/c/bryce_canyon_ii_by_eric_tff.jpg)");
      } else if (weatherId > 299) {
        $("body").css("background-image", "url(http://orig11.deviantart.net/46c6/f/2013/223/a/6/a6e2caefdc528a76930c4df10bf26983-d6hp0xq.jpg)");
      } else if (weatherId > 199) {
        $("body").css("background-image", "url(http://orig07.deviantart.net/8223/f/2013/222/5/b/5bcdb88a91d8805b847a532394535285-d6hk61y.jpg)");
      } else {
        $("body").css("background-image", "url(http://orig07.deviantart.net/1fe9/f/2013/208/6/8/68dc5367a9ab391de23f49a5d77d3f06-d6fgbqd.jpg)");
      }
    });
  });
});