

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
  var polyline = "BG2iyozCvomt3E2K6a-qB-qBsgCuV4KmgBA61C3KmgBtVwVvVsgCtVuVtVsgClgB4KlgB3K3KlgBA51C3KlgBrgCvV1KlgB2KlgBsgCtV4KlgBA3gE4KlgBuVrF4KkQA6a";

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
  center: {lat:43.65, lng:-79.38},
  zoom: 14,
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