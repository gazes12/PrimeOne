// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.6976637, lng: -74.1198937};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
