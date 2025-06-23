// Admin Map - Initializes Google Map, filters vendors, tracks zones
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.1699, lng: -115.1398 },
    zoom: 11,
  });

  // Example zone polygon (Downtown)
  const downtownCoords = [
    { lat: 36.174, lng: -115.157 },
    { lat: 36.176, lng: -115.135 },
    { lat: 36.160, lng: -115.135 },
    { lat: 36.160, lng: -115.157 }
  ];
  new google.maps.Polygon({
    paths: downtownCoords,
    map,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
}