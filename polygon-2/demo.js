

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
  var polyline = "BGs3j22Clm4ysE61CsgC-qB4gEA0xlB-qB4gE61C61C-qB4gE9qB4gE51C81C9qB4gEA-iQ9qB4gE51C81C9qB4gEAq3K-qB4gEwhI61CwhIwhI4gE8qB0rFA4gE7qB81CvhI0rF1rF4gE7qBq3KA4gE8qB81C81C61CA8qB3gEA1uV-qB3gE4gE7qB2rFA4gE9qBA51C71C51C7qB3gEAr3K8qB3gE2rFzrF4gE9qB0uVA4gE-qBq3Kq3K-qB4gEAq3K8qB4gEmtNmtN-qB4gEAq3K9qB4gE1rF0rF3gE-qBzrFA3gE9qB51C51C71CA7qB4gE8qB4gE81C61C8qB4gEAgjQ-qB4gE61C61C-qB4gEA0rF8qB4gE4gE-qBs3KA4gE9qBuhIthI4gE9qB4gE-qB2rF0rF8qB4gEA0xlB-qB4gE61C61C-qB4gEA2uV-qB4gE61C61C61CwhIwhIwhI-qB4gEAq3K8qB4gE81C61C61CwhI4gE8qBq3KA4gE-qB-qB4gEAq3K8qB4gE81C61C61CwhI61C81C-qB4gEAq3K-qB4gEuhIwhI81CuhI61C81C-qB4gEA0rF9qB4gE1rF2rF3gE8qBp3KA3gE7qB51C71C3gE7qBp3KA3gE9qBvhIvhI51CA9qB4gE-qB4gEq3Kq3KwhI81C61CuhIwhI81C64S64SwhI61C61C61C81CA8qB3gEA9iQ-qB3gE61C71C-qB1gEAr3K8qB3gE81C51C8qB3gEAzrF-qB3gE2rF1rF4gE9qB0rFA4gE-qB2rF2rF8qB4gEAq3K7qB4gE71C61C7qB4gEA2rF9qB2gE51C81C9qB4gEA-iQ9qB4gE51C81CA61CwhIwhI-qB4gEAq3K9qB4gE51C61CA61Cq3Ks3KwhI61C61C61C4gE-qBq3KA4gE8qB-qB4gEAs3K8qB4gEwhI61C2rF0rF-qB4gEA2rF8qB4gEmtNktN61CwhI61C61C-qB4gEA2rF9qB4gEzrF0rF3gE-qBp3KA3gE9qBvhIthI71CA51C61C3gE-qBzrFA3gE9qBltNltN51CA51C81C3gE8qB1rFA3gE7qBzrF1rF9qB3gE9qBzrF51C71C51C-qBvhIwhI51CwhI71C61C7qB4gEA2rF8qB2gE81C81C8qB4gEA-owB7qB4gE3gE-qBr3KA1gE9qB1rF1rF9qB3gEAng7B7qB3gE71C51C7qB3gEAp3K9qB3gEvhIvhI7qB3gEA1rF9qB3gE3gE7qB1rFA3gE9qB51C51C3gE9qB3gE-qB51CwhI51C61C9qB4gEAq6a9qB4gEthIwhI9qB4gEA0rF-qB4gEktNmtN-qB2gEAgjQ9qB4gEvkYwkY7qB4gEA0rF8qB4gE4gE-qBq3KA4gE9qBwhIvhI4gE7qB2rFA4gE8qB61CwhI4gE-qBq6aA4gE-qB0rF0rF-qB4gEAq3K9qB4gEzrF2rF3gE8qB_lgBA3gE-qB7qB4gEAq3K9qB4gEvhI61C51C81C51CA1rF1rF9qB3gEAzrF7qB3gE51CA1rF0rF9qB4gEAq9qB7qB4gEvhI61CA61CwhIwhI8qB4gEA2rF7qB4gE71C61C7qB4gE8qB4gE81C61C8qB4gEAgjQ7qB4gE1rF0rF3gE-qBzrFA3gE9qB71CvhI51C51C9qB3gEAzrF7qB3gEvhI71C1rFzrF7qB3gEA_iQ9qB3gEjtNjtN71CvhI51C51C9qB3gEA_iQ-qB3gE4gE9qB2rFA2gE7qB-qB3gEAp3K9qB3gEthI71CvhIvhIvhI51C51C51C71CA51C61CvhI61C51C81C51CAr3Kp3K7qB3gEA1rF9qB3gE57iB57iB51CvhI51CA71CwhIthIwhI71CwhI51C61C51CwhI71C81C51CuhI1rF2rF1gE-qB1rFA3gE9qB51CvhI71C51C7qB3gEAp3K8qB3gE81C71C61CthIwhIvhI61CvhIwhIvhIA3gE51C51C71C8qBthIwhI71CwhIjtNmtN51CuhIvhIwhI71CwhIthIwhI9qB4gEAoprD9qB4gEzrF0rF3gE-qB1rFA3gE9qB7qB3gEAp6a9qB3gE51C51C9qB3gEAx61C-qB3gE61C51C61CvhI61C71C81CthIktNltN81CvhIktNjtN61CvhIwhIvhI-qB3gEA_iQ9qB3gE51C51C51CvhI3gE7qB1rFA3gE9qBzrF1rF71CthIvhI71C51C51C3gE9qBp3KA3gE7qB1rF1rF51CvhIzrFzrFvhI71C_iQ9iQ9qB3gEA1rF7qB3gE3gE9qB_iQA3gE7qB9qB3gEA_lgB7qB3gEvhI51C1rFzrF7qB3gEAp3K9qB3gE3gE9qBp3KA3gE-qB1rF0rF7qB4gEAq3K9qB4gEzrF2rF3gE8qB1rFA3gE7qB51CvhI3gE9qB1rFA3gE-qBtkYwkY3gE8qB1rFA3gE7qBzrF1rF9qB3gEAp3K-qB3gEkwdjwdA71C51C51C71CvhI51C51CA51C61C71C-qB3gEAzrF-qB3gE4gE9qB0rFA4gE7qB61C71C4gE7qB2rFA4gE8qB0rF2rF-qB4gEA0rF-qB4gE61CA61C51C4gE9qBq3KA4gE7qB-qB3gEA1rF-qB3gE61C51CA51C51C71C9qB1gEAp9qB-qB3gE61C51C-qB3gEAp3K8qB3gE61C71C-qB3gEAp3K-qB3gE61C51C-qB3gEA_iQ8qB3gE81C51C61CvhI4gE7qBq3KA4gE8qB-qB4gEAq6a9qB4gE51C61C9qB4gEAq3K9qB4gE51C81C9qB4gEA-iQ7qB4gE71C81C7qB2gEAgjQ8qB4gE4gE-qB2rFA4gE9qB2rFzrF61CvhI61C71C-qB3gEAzrF8qB3gEwhIvhI81CvhI0rFzrF4gE9qB2rFA4gE-qB0rF0rF-qB4gEAq3K8qB4gE81C81C61CuhIwhI81C0rF0rF-qB4gEAq3K-qB4gE61C81C-qB4gEA-iQ9qB4gE51C81C9qB2gE-qB4gE61C81C61CwhI81C61C61CwhIgjQ-iQwhI81CuhIwhI4gE8qBq6aA4gE7qB81C71C2gE7qBs3KA4gE8qB61C81C61CA-qB3gEA1uV8qB3gE81C51C8qB3gEAp3K7qB3gEp3Kp3KvhI51Cp3Kr3K71CthI51C71C9qB3gEAzrF-qB3gEwhIvhIA51C1rF1rFvhI51C51CvhI54S54S51CvhIvkYvkY9qB3gEAzuV7qB3gE51C51C9qB3gEA1rF9qB3gE51C51C9qB3gEAp3K-qB3gE61C51C-qB3gEA_iQ-qB3gE61C51C8qB3gE7qB3gEvhI51Cp3Kp3K9qB3gEA1rF-qB3gEq3Kp3K4gE9qB4gE-qB61C61CwhI81C61C61C81CA-iQ_iQ81CvhI4gE7qB0rFA4gE9qB-qB3gEAz01B8qB3gE2rFzrF4gE9qB4gEuV61C4gE";

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
  center: {lat:45.48, lng:-73.54},
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