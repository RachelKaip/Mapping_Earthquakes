  // Add GeoJSON data.
  let sanFranAirport =
  {"type":"FeatureCollection","features":[{
      "type":"Feature",
      "properties":{
          "id":"3469",
          "name":"San Francisco International Airport",
          "city":"San Francisco",
          "country":"United States",
          "faa":"SFO",
          "icao":"KSFO",
          "alt":"13",
          "tz-offset":"-8",
          "dst":"A",
          "tz":"America/Los_Angeles"},
          "geometry":{
              "type":"Point",
              "coordinates":[-122.375,37.61899948120117]}}
  ]};

  // Grabbing our GeoJSON data.
L.geoJson(airportData, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " +feature.properties.name +"</h3>");
    }
}).addTo(map);

onEachFeature: (feature, layer) => {
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h3>Airport Name: " +feature.properties.name +"</h3>")
}
