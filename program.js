var map = L.map('map').setView([4.633726760990255, -74.14290923566787], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.633726760990255, -74.14290923566787]).addTo(map);
var marker = L.marker([4.636180535043864, -74.13749822334897]).addTo(map);
