var map = L.map('map').setView([4.633726760990255, -74.14290923566787], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.633255, -74.1429787]).addTo(map);
var marker = L.marker([4.6361803864, -74.13546385465]).addTo(map);
