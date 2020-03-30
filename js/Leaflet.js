//contact map  
var mymap = L.map('mapid').setView([52.371852, 5.221282], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var buildingicon = L.icon({
    iconUrl: 'img/town.png',
    iconSize: [38, 30],
    iconArchor: [22, 94],
    popupArchor: [-3, -76]
});

L.marker([52.371852, 5.221282], {icon: buildingicon}).addTo(mymap)
    .bindPopup("<b>Gemeente Almere</b><br />Stadhuisplein 1, 1315 HR<br> T: 036 - 9999999</br>E: gezond@almere.nl</br>").openPopup();


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

