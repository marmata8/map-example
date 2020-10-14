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
 * Display clustered markers on a map
 *
 * Note that the maps clustering module https://js.api.here.com/v3/3.1/mapsjs-clustering.js
 * must be loaded to use the Clustering

 * @param {H.Map} map A HERE Map instance within the application
 * @param {Object[]} data Raw data that contains airports' coordinates
*/
function startClustering(map, data) {
  // First we need to create an array of DataPoint objects,
  // for the ClusterProvider
  var dataPoints = data.map(function (item) {
    return new H.clustering.DataPoint(item.LATITUDE, item.LONGITUDE, 12, item.POSTAL_CODE);
  });

  // Create a clustering provider with custom options for clusterizing the input
  var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
    clusteringOptions: {
      // Maximum radius of the neighbourhood
      eps: 32,
      // minimum weight of points required to form a cluster
      minWeight: 36
    }
  });

  // Create a layer tha will consume objects from our clustering provider
  var clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);

  // To make objects from clustering provder visible,
  // we need to add our layer to the map
  map.addLayer(clusteringLayer);
//}  moved to after event listener

// Add an event listener to the Provider - this listener is called when a maker
// has been tapped:
clusteredDataProvider.addEventListener('tap', function(event) {
  // Log data bound to the marker that has been tapped:
  console.log(event.target.getData())
});
}
/* 
    Displays current zoom level to the end user 
 */
function displayZoomLevel(zoom) {
  var zoomSpan = document.getElementById('zoom-level');
  zoomSpan.textContent = zoom;
}

/**
 * Boilerplate map initialization code starts below:
 */

// Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "qyoocETQNJGdTCbCzgjS_lbtIDMzw3CHu48hUeIxvQI"
});

var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  center: new H.geo.Point(43.55, -79.58),
  zoom: 10,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));


// Step 4: create the default UI component, for displaying bubbles
var ui = H.ui.UI.createDefault(map, defaultLayers);

// A listener updates the map zoom level -- it is called once when the map 
// view change is complete.
map.addEventListener('mapviewchangeend', function () {
  var zoom = map.getZoom();

  // The function that displays the zoom level is called only once, 
  // after zoom level changed
  displayZoomLevel(zoom);
});

// Now use the map as required...
addPolygonToMap(map);

// Step 5: cluster data about airports's coordinates
// airports variable was injected at the page load
startClustering(map, codes);

