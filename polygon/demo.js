

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
  var polyline = "BG4rpozCptp03E8qBmgB61C81C-qB4gE4gE8qB-qB4gEsgCwVsgCvV8qB7qB4gE9qB-qB9qBsgCtVwhIAsgCuVuVsgCA81CuVsgC4gE8qB81C61C8qB4gE-qB-qB8qB4gE4gE-qB4gE4gEsgCuV2rFAsgCuV61C81CuVqgCA2rFwVsgC8qB-qB-qB4gE-qB8qBuVsgCAwhIuVsgC-qBA4gE3gEsgCtV61CAsgCuVy2Gy2G4gE-qB81C61C8qB4gE2rF2rF4gE8qB61C81CuVsgCA61CwVsgCwhIwhI4gE8qB61C81CuVsgCA61CwVsgC0rF2rF4gE8qBwhIwhI-qB4gE8qB-qBwVsgCA61CuVsgCwhIwhI4gE8qB8qB4gE-qB-qBuVsgCA61CtVsgC9qB-qBtVsgCuVsgCsgCuV81CAsgCuV8qB4gE-qB-qB8qB4gE-qB-qBuVsgCAktNtVsgC51C61C3gE-qBtVsgCA2rFvVqgC7qB-qB9qB4gErgCuV51CArgCwVvVsgCA61CwVsgC4gE-qB8qB4gE-qB8qBuVsgCA61CtVsgC9qB-qB7qB4gErgCuVp3KArgCwV71C61C7qB4gErgCuV71CArgCuVtVsgCA81CuVsgC-qB8qBuVsgCA81CtVsgC9qB8qB7qB4gE9qB-qBtVsgCA61CuVsgC4gE4gE-qB4gE8qB-qBwVsgCAuhIvVsgC7qB-qBvVsgCA2rFwVsgC8qB8qBwVsgCA61CvVsgC7qB-qBvVsgCA61CtVsgC9qB-qBtVsgCA61CtVsgC3gE4gEvVsgCA61CtVsgC7qB-qB9qB4gErgCuV1rFArgCwVtVsgCA0uVtVsgC9qB8qB9qB4gE51C81CrgCuV51CArgCtV51C71C9qB3gE9qB7qBtVrgCA51CtVrgC9qBAtVsgCAuhIvVsgC7qB-qBA-qB8qB8qB-qB4gE-qB-qBuVsgCA61CtVsgC9qB-qB9qB4gE3gE8qB51C81CtVsgCAwhItVqgC9qB-qB9qB4gE3gE-qBtVsgCA64StVsgC9qB8qB9qB4gErgCwVzrFArgCvV1rFzrF7qB3gE71C71CrgCtVrgCuV7qB-qBrgCuV1rFArgCtV51C51C9qB3gE3gE9qBtVrgCAzrFtVrgC9qB9qB9qB3gE7qB9qB9qB1gE9qB9qBtVrgCAp3KtVrgC9qB9qB7qB3gE9qB7qBtVrgCA71CvVrgC7qB7qBvVrgCA71CtVrgC9qB7qBtVrgCA51CtVrgC9qB9qBtVrgCA1rFvVrgCrgCtVzrFArgCtV9qB3gE3gE9qB7qB7qB9qBA9qB8qBrgCwV51CArgCvVx2Gx2G3gE9qB51C51CvVrgCAvhIwVrgC61C51C4gE9qBA7qB3gE3gEtVrgCA71CvVrgC51C51C3gE7qB1rF1rFtVrgCAp3KuVrgC81C51CsgCvV61CAsgCtVuVrgCA51CwVrgC61C71CsgCtV61CtVsgCrgCArgC7qB9qBvVrgCA51CtVrgC9qB9qB7qB3gE9qB7qBtVrgCA71CvVrgC7qB7qBvVrgCA51CtVrgC9qB9qBtVrgCA1rFtVrgC9qB7qBtVrgCAp3KvVrgC7qB9qBvVrgCA51CtVrgC9qB9qBtVrgCAvhItVrgC9qB7qBtVrgCA1rFtVrgC9qB7qB9qB3gE7qB9qBvVrgCA1rFtVrgC9qB7qBtVrgCAvkYuVrgC-qB7qBuVrgCAvhIwVrgC8qB9qBwVrgCA51CuVrgC4gE3gEuVrgCA51CuVrgC-qB9qBuVrgCAp3KwVrgC8qB9qBwVrgCvVrgC7qB7qBvVrgCA1rFtVrgC9qB7qB7qB3gE9qB9qBtVrgCA51CtVrgC9qB9qB9qB3gErgCtV51CArgCtVvhIvhItVrgCAvhIuVrgC-qB9qBuVrgCAzrFuVrgC4gE3gE-qB3gE61C51CsgCvV2rFAsgCwV8qB4gE81C61C4gE8qB61C81CuVsgCA61CwVsgC8qBA-qB3gEssJrsJ-qB3gE-qB9qBuVrgCA1rFuVrgC81C51CsgCtV61CAsgC2K-qBsgC";
  var lineString = new H.geo.LineString.fromFlexiblePolyline(polyline);
  console.log(lineString)

  map.addObject(
    new H.map.Polygon(lineString, {
      style: {
        fillColor: '#FFFFCC',
        strokeColor: '#829',
        lineWidth: 8
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
  center: {lat:52, lng:5},
  zoom: 5,
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