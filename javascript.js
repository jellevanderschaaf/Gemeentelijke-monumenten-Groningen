function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(53.21917, 6.56667),
        zoom: 13,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}