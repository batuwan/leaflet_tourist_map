/*Basemap*/

var OpenStreetMap_Tile = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
);

/* Map */

var touristic_map = L.map("peninsulamap", {
  center: [41.015, 28.95],
  zoom: 14,
  layers: [OpenStreetMap_Tile],
});

/*custom icons*/

var greenIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var orangeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var violetIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});



/*popup function*/

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.Name);
}

/*markercluster group*/

/*topkapı-kocamustafapaşa*/

var topkapi_point = L.geoJSON(points_topkapi, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: greenIcon });
  },
  onEachFeature: onEachFeature,
});

var topkapi_line = L.geoJSON(line_topkapi, { color: "green" });

var topkapi_kocamustafapasa = L.layerGroup([topkapi_line, topkapi_point]);

topkapi_kocamustafapasa.addTo(touristic_map);

/*eminonu-sultanahmet*/
var eminonu_point = L.geoJSON(point_eminonu_sultanahmet, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: goldIcon });
  },
  onEachFeature: onEachFeature,
});
var eminonu_line = L.geoJSON(line_eminonu_sultanahmet, { color: "gold" });

var eminonu_sultanahmet = L.layerGroup([eminonu_line, eminonu_point]);

eminonu_sultanahmet.addTo(touristic_map);

/*sultanahmet-ahirkapi*/
var sultanahmet_ahirkapi_point = L.geoJSON(point_sultanahmet_ahirkapi, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: redIcon });
  },
  onEachFeature: onEachFeature,
});
var sultanahmet_ahirkapi_line = L.geoJSON(line_sultanahmet_ahirkapi, {
  color: "red",
});

var sultanahmet_ahirkapi = L.layerGroup([
  sultanahmet_ahirkapi_line,
  sultanahmet_ahirkapi_point,
]);

sultanahmet_ahirkapi.addTo(touristic_map);

/*sirkeci-cankurtaran*/
var sirkeci_cankurtaran_point = L.geoJSON(point_sirkeci_cankurtaran, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: orangeIcon });
  },
  onEachFeature: onEachFeature,
});
var sirkeci_cankurtaran_line = L.geoJSON(line_sirkeci_cankurtaran, {
  color: "orange",
});

var sirkeci_cankurtaran = L.layerGroup([
  sirkeci_cankurtaran_line,
  sirkeci_cankurtaran_point,
]);

sirkeci_cankurtaran.addTo(touristic_map);

/*sehzadebasi-suleymaniye*/
var sehzadebasi_suleymaniye_point = L.geoJSON(point_sehzadebasi_suleymaniye, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: onEachFeature,
});
var sehzadebasi_suleymaniye_line = L.geoJSON(line_sehzadebasi_suleymaniye, {
  color: "blue",
});

var sehzadebasi_suleymaniye = L.layerGroup([
  sehzadebasi_suleymaniye_line,
  sehzadebasi_suleymaniye_point,
]);

sehzadebasi_suleymaniye.addTo(touristic_map);

/*galata*/
var galata_point = L.geoJSON(point_galata, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: violetIcon });
  },
  onEachFeature: onEachFeature,
});
var galata_line = L.geoJSON(line_galata, {
  color: "violet",
});

var galata = L.layerGroup([
  galata_line,
  galata_point,
]);

galata.addTo(touristic_map);

/* Layer control*/

var baseMaps = {
  OSM: OpenStreetMap_Tile,
};

var overlayMaps = {
  "Topkapı - Kocamustafapaşa Route": topkapi_kocamustafapasa,
  "Eminönü - Sultanahmet Route": eminonu_sultanahmet,
  "Sultanahmet - Ahırkapı Route": sultanahmet_ahirkapi,
  "Sirkeci - Cankurtaran Route": sirkeci_cankurtaran,
  "Şehzadebaşı - Süleymaniye Route": sehzadebasi_suleymaniye,
  "Galata":galata
};

L.control
  .layers(baseMaps, overlayMaps, null, { collapsed: false })
  .addTo(touristic_map);
