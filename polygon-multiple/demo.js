

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
  var polylines = [
    "BGwixozCjh4t3EmgBsFmgB2KuVsgCsgCwV-qB8qB2KmgBA-qB4KmgBuVAwVtVmgB3KmgB4K61C61CuVsgCwVuV2KmgB1KmgBvVwV1KmgBA8qB3KmgBtVwV3KkgBA-qB4KmgBmgB4K8qBAmgB2K4KmgBA81C3KmgBtVuV3KmgBA-qB1KmgBvVuVtVsgCtVuV3KmgBA-qB3KmgBrgCsgC1KmgBA8qB3KmgBtVwV3KmgBA61C3KmgBlgB4KlgB3KrgCrgClgB3K51CAlgB1KtVrgCrgCvV51C51CvVrgClgB1K7qBAlgB3K71C51CtVrgCtVvV3KlgBA3gE4KlgBsgCrgC2KlgBAzrF4KlgBuVtVwVrgCsgCrgC2KlgBA3gE4KlgBsgCvV4KlgB3KlgBtVtV3KlgB4KlgB61C51CmgB3K8qBAmgBsFwVmgB",
    "BGksrozC76vu3EAylB2KmgBmgB2K61CAmgB4K4KmgBA61C4KmgBmgB4KmgB3KuVtVmgB3KmgB4K-qB-qB2KmgBA8qB4KmgBqrDqrD2KmgBA-qB1KmgBvVuV1KmgBA61C2KmgBwVAuVrgC-qB7qBmgB3K8qBAmgB4K-qB8qBuVsgCuVAwVrgCmgB1K61CAmgB2K-qB-qBuVsgCuVuV4KmgBA-qB4KmgBuVuV4KmgBAy2G3KmgBtVwV3KmgB4KmgBsgCsgC2KkgBA-qB4KmgBuVuV4KmgBA-qB3KmgBtVuVtVsgCvVwVtVsgCtVuV3KmgBA-qB3KmgBtVuV3KmgBA-qB1KmgBlgB2K9qBAlgB4KtVuVrgCuVAwVsgCsgC2KmgBA0rF1KmgBvVwVtVsgCtVuV3KmgBA-qB3KmgBtVuVtVsgCtVuV3KmgBA61C3KmgBtVwVtVsgC71C61CtVAtVtVrgCvVrgCrgCrgCtV9qB9qBtVrgCrgCtVrgCrgClgB3K9qBAlgB1KtVtVrgCvVtVtVrgCtVvVrgClgB3K7qBAlgB3Kn2El2ErgCtV7qB9qB3KlgBA3gE4KlgBuVtVAvV9qB7qBtVAtVuVlgB4KlgB3KtVtVlgB3K9qBAlgB1K3KlgBA71C4KlgBuVtVAtVtVvV3KlgBA51C4KlgBsgCtV4KlgBA71C2KlgB-qB7qBsgCvVuVpgCuVvV4KlgB3KlgBtVtV3KlgB4KlgBsgCrgC4KlgBA1rF2KlgBwVtV2KlgBA51C4KlgBsgCrgC4KlgBA51C2KlgBsgCrgC4KlgBA71C4KlgB8qB7qBsgCvV4KlgBA51C4KlgBuVtV4KlgBA9qB2KlgBmgB1K-qBAmgBqF4KkQA6a",
    "BGghpozCl_mv3EuVkQwVsgCmgB4K8qBAmgB2KsgCsgCsgCuV61C81C4KmgBA61C4KmgBuVAuVtVmgB3K-qBAmgB4K4KmgBA61C2KmgBsgCuVwVsgC0rF2rFsgCuVuVsgCsgCuVwVwVsgCuVuVsgCuVAwVtVmgB3K8qBAmgB4K81C61C2KmgBA-qB4KmgBuVAwVvVmgB1KmgB2K8qB-qB4KmgBA-qB3KmgB7qB8qBrgCwV9qB8qBAuVmgB4K-qBAmgB4KuVuVmgB4K8qBAmgB2K4gE4gE4KmgBA-qB3KmgBtVuVtVsgCrgCwVvVsgCrgCuVAuVwVwVuVsgCsgCuVsgCsgCsgCuV-qB-qB2KmgBA8qB1KmgBrgCwV9qB8qBAwVuVuV4KmgB3KmgBrgCsgC1KmgBA-qB3KmgB9qB8qBlgB4K1gEAlgB4K3KmgBA61C4KmgBsgCsgC2KmgBA8qB1KmgB9qB-qBrgCuVtVwVlgB2K9qBAlgB1KtVvVvVA1KmgB2KmgBsgCwV4KmgBA4gE3KmgBrgCsgC1KkgBA4gE3KmgBtVwV3KmgBA61C3KmgBrgCsgC1KmgBA4gE3KmgBrgCuV3KmgBA4gE1KmgB9qB-qBrgCuVAuVuVwV4KmgBA8qB3KmgB7qB-qBlgB4K9qBAlgB3KtVrgCtVtV3KlgBA9qB3KlgBtVtVtVlgBvVvV1KwV3KmgBlgB2K9qBAlgB1K51C71CtVrgC3gE1gEvVAtVuVlgB4K7qBAlgB3K9qB9qBtVrgCvVtVtVrgClgB3K51CAlgB1K3KlgBA9qB3KlgBrgCrgC1KlgBA9qB3KlgBlgB1K51CAlgB3K3KlgBA9qB3KjgBtVvV3KlgBAzrF1KlgBvVvV1KlgBA51C3KlgBrgCtVtVrgCtVvVAtVuVtVAvVrgCtVtVrgCvVtV1KlgB2KlgBsgCrgCAtVtVvV3KlgBA7qB1KlgBvVvV1KlgBA7qB3KlgBtVvV3KlgBAzrF3KlgBrgCtV1KlgBAniM2KlgBwVvV2KlgBA7qB4KlgBsgCrgC4KlgBA9qB2KlgBwVtVuVrgCuVtV4KlgBA9qB4KlgB61C51CsgCvVAtVvVtV1KlgBA9qB2KlgB-qB9qBsgCtV-qB7qB2KlgBA3gE4KlgBsgCrgC4KlgBA9qB2KlgBsgCrgC4KlgBA9qB4KlgBsgCrgC2KjgBA71C4KlgBmgB1K-qBAmgBqFuVmgB"
  ];

  var polygons = polylines.map(polyline => {
    return new H.map.Polygon(new H.geo.LineString.fromFlexiblePolyline(polyline), {
      style: {
        fillColor: 'rgba(102,204,204,0.3)',
        strokeColor: '#829',
        lineWidth: 2
      }
    })
  });

  map.addObjects(polygons);
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
  zoom: 11,
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