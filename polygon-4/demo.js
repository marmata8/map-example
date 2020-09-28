

/**
 * Adds a polygon to the map
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addPolygonToMap(map) {
  /*var lineString = new H.geo.LineString(
    [52, 13, 100, 48, 2, 100, 48, 16, 100, 52, 13, 100],
    'values lat lng alt'
  );*/
  var polyline = "BGuynizC1lz_3EgjQ61Cy61CAgjQ2rF0uV0uV2rFgjQAk1rF2rFgjQq3Kq3K0rFgjQzrFgjQp3Kq3K1rFgjQAo9qB1rFgjQzuV0uV_iQ2rF9iQ1rFr3K9lgBp3Kp3KzrF_iQAzuV1rF_iQ9lgBp3Kr3K_lgB9rgC9rgC9iQzrF1uVA9iQ1rFp9qBp9qB1rF9iQAp9qB2rF_iQ0uVzuVgmgBp3Kq3Kp3KgjQ1rF0uVAgjQzrFq3Kr3Kq3K51Cq3KgjQ";

  map.addObject(
    new H.map.Polygon(new H.geo.LineString.fromFlexiblePolyline(polyline), {
      style: {
        fillColor: 'rgba(102,204,204,0.3)',
        strokeColor: '#829',
        lineWidth: 2
      }
    })
  );
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "qyoocETQNJGdTCbCzgjS_lbtIDMzw3CHu48hUeIxvQI"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:43.55, lng:-79.58},
  zoom: 10,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);


// Now use the map as required...
addPolygonToMap(map);