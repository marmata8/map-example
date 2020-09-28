

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
  var polyline = "BGkq1-2Cp0r4wE61CsgC-qB4gEAgjQ9qB4gE1rF2rFthI61C9qB4gEAq3K9qB4gEjtNktN9qB4gEA2rF7qB4gE1rF0rFvhI81CzrF0rF71CwhI51C61C51CwhIvhI81C9qB4gE-qB2gE61C81C-qB4gEAq3K9qB4gE51C61C51CwhI1rF2rF3gE8qB1rFA3gE-qB51CwhIvhIwhI51CuhI1rF2rFthI61C1rF2rF9qB4gEA0rF7qB4gE71C81CA61CwhI61C81C81CuhI61C-qB4gEA0uV9qB4gE3gE-qBzrFA3gE8qB51CwhIp3Kq3K3gE-qB1rFA3gE9qB51C51C3gE9qB3gE-qB51C61CvhI81CA61C0rF2rFwhI61C2rF0rF8qB4gEAgjQ7qB4gEvhI61CA81C4gE8qB-lgBA4gE-qB-qB4gEAq3K-qB4gEuhI61C81CwhI61C61C-qB4gE9qB4gE51C81C71CuhIthI81C71C61CvhI61C7qB4gEA2rF8qB4gE4gE8qB2uVA4gE7qB61C71C4gE7qBgjQA4gE8qB61CwhI61C81C-qB4gE9qB2gE51C81C51CwhI1rF0rF3gE-qBp3KA3gE-qB51C61CvhI61CA61CwhIwhI8qB4gEA2rF7qB4gEvhIwhI9qB4gEA0uV-qB4gEwhI61C0rF2rF-qB4gEA-iQ9qB4gE3gE-qBzrFA3gE-qB71CuhI3gE-qBzrFA3gE9qB51C51C71CA7qB4gE8qB4gEwhIwhI-qB4gEAgjQ9qB4gE3gE8qB9iQA3gE7qB71C71C51CA9qB4gEAgjQ-qB4gE61C61C-qB4gEAq3K-qB4gE61C61C-qB4gEA2rF8qB4gE81C61C8qB4gEA0uV7qB4gE71C81C7qB4gE8qB4gE81C61C8qB4gEA0rF-qB4gE61C81C61CuhI81C81C8qB4gEA0rF-qB4gE61C81C81CuhI61C81C8qB4gEAq6a7qB2gE3gE-qB1rFA3gE9qBzrFzrF51CvhI71C51C51CvhI51C51C9qB3gEA1rF9qB3gE51C51C51CvhI71C51C7qB3gEA1rF9qB3gE51C51C9qB3gEA1rF7qB3gE3gE7qBp3KA3gE9qB9qB3gEAp3K9qB3gE51C51C9qB3gEA1rF7qB3gE71C51C51CvhI51C51C9qB3gEA1rF-qB3gE0rFzrF4gE9qBs3KA2gE7qB-qB3gEA1rF9qB3gE1gE9qB1rFA3gE7qB51C51C3gE9qBp3KA3gE9qB1rFzrF51CvhIltNltN7qB3gEA9iQ9qB3gE1rF1rF51CA7qB4gEAq6a8qB4gE61C61C-qB4gEAgjQ-qB4gE61C61C61CwhI81C61C8qB4gEAq3K7qB4gE71C81C51CwhI51C61C9qB4gE-qB4gE0rF0rFwhI81C2rF0rF8qB4gEAq3K-qB4gE61C61C81CwhI61C81C-qB4gEAq3K8qB4gE81C61C8qB4gEAq3K7qB4gE71C61C7qB4gE8qB4gE81C61C61CwhI61C81C61CuhI81C81C61CwhI61C61C81CwhI61C61C-qB4gEA2rF9qB4gE51C61C71CwhI3gE8qBp3KA3gE7qB7qB3gEA1rF9qB3gEjtNjtN71CvhIvhIvhI7qB3gEAzrF9qB3gEvhIvhI51CvhI1rF1rF51CAvhIwhI3gE-qB3gE9qBzrFzrF71CvhI51C71C51CthI1rF1rF3gE9qBzrFA3gE-qB71CwhIzrF0rF3gE-qB1rFA3gE9qBzrFzrF9qB3gEAp3K-qB3gE61C71CA51C3gE7qBzrFA3gE9qB1rF1rF9qB3gEAp3K7qB3gEp3Kp3K71CA51C61CvhI81CvhIwhIvhI61C51C61C3gE-qBzrFA3gE8qBp3Ks3K71CuhI51C81C51CwhIvhI61C9qB4gEA0rF7qB4gE71C81C7qB4gEA-lgB9qB4gE51C61C9qB4gEAq6a9qB4gE51C61C51CwhI1rF2rF3gE-qB3gE9qBzrF1rF9qB3gEAp6a-qB1gE61C71C-qB3gEA9lgB8qB3gE81C51C8qB3gEA1rF7qB3gE1rFzrF51CA71C61C1gE8qB3gE7qB1rF1rF9qB3gEA9iQ-qB3gE2rF1rFuhI51C81C71CwhI51C0rFzrF61CvhI81C71C8qB3gE7qB1gEvhI71C1rFzrF7qB3gEAp3K8qB3gEq3Kr3KwhI51C81CvhI61C51C-qB3gE9qB3gE51CA71C61CvhI81C51C61C3gE-qBp3KA3gE9qB7qB3gEA_iQ8qB3gE2rFzrFwhI51C0rF1rF-qB3gEA1rF9qB3gEvhI51CzrFzrF9qB3gEAp3K-qB3gE61C71CA51C3gE9qBp3KA3gE7qB51CvhI71CA51C61CvhI61C51C81C51CAr3Kp3K7qB3gEA1rF9qB3gEvhI51CzrF1rF9qB3gEAzrF9qB3gE51C71C7qB1gEA1xlB8qB1gE2rF1rF4gE9qB4gE-qBktNktN61CA-qB3gEAzrF9qB3gE51C51C51CvhI71C71C51CthI51C71C9qB3gEA9iQ-qB3gE0rF1rF4gE9qB2rFA4gE-qB61C61C4gE-qBq3KA4gE9qBA51C51C51C9qB3gE-qB3gE61C51C81CvhI61C71CA51C3gE7qBzuVA3gE9qB71CvhI51C51C9qB3gEA1rF-qB3gEwhIvhI-qB3gE9qB1gE3gE9qBzuVA3gE9qB1rFzrF7qB3gEA1rF8qB3gE61C51C81CvhI61C51C61CvhI81C51C8qB3gE7qB3gEvhI71C71C51CthI51C9qB3gEA1rF9qB3gE51C51C9qB3gEAzrF7qB3gE1rF1rF51CAvhIwhI3gE-qBp3KA3gE9qBp3Kp3K71CvhI51C51C7qB3gEAp3K8qB3gE2rF1rF4gE9qB0rFA4gE-qBwhIwhI61CA-qB3gEAp3K9qB3gE51C51C9qB3gEA_iQ-qB3gE2rF1rF4gE7qB4gE8qBq3Ks3K8qB2gEA2rF-qB4gE2rF2rF61CA-qB3gEA_iQ9qB3gE51C51C9qB3gEAp3K-qB3gE61C71C61CvhImtNjtN8qB3gE7qB3gE71C51C51CvhI51C51C9qB3gEA1rF9qB3gE51C51C51CvhI51C51C9qB3gEA1rF9qB3gE51C51C51CvhI71C51C7qB3gEA1rF8qB3gE2rFzrF4gE9qBq3KA4gE-qB61CwhIwhIwhI-qB2gEAs3K8qB4gE81C61C8qB4gEA0rF-qB4gE61C81C81CuhI61C81C61CwhI81C61C61CwhI0rF0rF81CA0rFzrF81CvhI0rF1rF4gE7qB2rFA4gE8qB61CwhI61C81C-qB2gEAgjQ9qB4gE51C61C9qB4gEAs3K7qB2gE71C81C7qB4gEA0uV8qB4gE81C61C8qB4gEA2rF-qB4gE0rF0rFwhI81C2rF0rF-qB4gEA2rF8qB4gEwhI61C0uV0uV81C-qB61C51CA3gEjtNltN9qB3gEAp3K9qB3gE51C51C9qB3gEAz01B-qB3gE61C51C-qB3gEA1rF-qB3gE2gE7qBs3KA4gE9qB-iQ_iQ-qB3gEAn6a-qB3gE61C71C61CvhI4gE7qBq3KA4gE8qB2rF2rF8qB4gEA2rF7qB2gE51C81CA61CuhI61C81C81CwhI61C0rF2rF-qB2gEAs3K9qB4gE51C61C51CwhI71C61C51CwhI51C61C9qB4gEAgjQ-qB4gE61CA61C51CwhI71C61C51CwhI51C-qB3gEA_owB9qB1gE51C71C9qB3gEAzuV-qB3gE2rF1rF4gE7qB0rFA4gE8qB2rF2rF8qB4gEAgjQ-qB4gE61C61C-qB4gEA-owB-qB4gE61CA8qB3gEAp3K-qB3gE2rF1rFwhI51C0rFzrF61CvhI81C71C61CthI2rF1rF4gE9qB2gE-qBs3Kq3K8qB4gEA2rF7qB4gE71C61C51CwhI51C61C9qB4gEAq3K-qB4gEktNmtN-qB2gEA2rF-qB4gE61CA61CvhIwhI51C-qB3gE9qB3gE51C51C9qB3gEA1rF9qB3gE51C51C9qB3gE-qB3gE61C51C81CvhI0rF1rF4gE7qB4gE8qBq3Kq3K81CwhI0rF2rF61CA81CvhI61C51C61CvhI81C51C61CvhIq3Kp3K4gE9qBq3KA4gE-qB-qB2gEAgjQ9qB4gE51C61C51CwhI71C81C51CuhIvhIwhI9qB4gE-qB4gE61CA81C51CwhI51C0rF1rF61CvhIq6ap6awhI51C61C51CwhI71C2rFzrF61CvhI81C51C61CvhIktNltN81CvhI61C51C8qB3gEAzrF-qB3gE0uV1uVwhI51C81C51C4gE9qB2gEuV81C4gE";

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
  center: {lat:45.43, lng:-75.69},
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