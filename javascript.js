// function swap coordinates // 

function swappedCoordinates() {
    var coords = data.features;
    testCoords = data.features[0].geometry.coordinates[0];
    console.log(data.features);


    coords.forEach(swapCoordinatesOne);

    function swapCoordinatesOne(item) {

        item.geometry.coordinates[0].forEach(swapCoordinatesTwo);

        function swapCoordinatesTwo(item) {

            var coordinateOne = item.shift();
            item.push(coordinateOne);

        };
    };

};

// Ajax // 

var data;
var testCoords;


var getMonumentData = new XMLHttpRequest();
getMonumentData.open('GET', 'https://ckan.dataplatform.nl/dataset/7c5c81f1-8efa-4ed4-8483-15181b261b39/resource/98a3ba8d-b3b8-4602-bfe2-e987caad734f/download/gem_groningen_gemeentelijke_monumenten.json');
getMonumentData.onload = function() {
    data = JSON.parse(getMonumentData.responseText);
    swappedCoordinates();

};
getMonumentData.send();



// Create map + polygons //

let map;
setTimeout(getMap, 1500);

function getMap() {
    map = new Microsoft.Maps.Map('#bingMap', {
        center: new Microsoft.Maps.Location(53.21917, 6.56667),
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        zoom: 13,
        customMapStyle: myStyle

    });

    data.features.forEach(drawPolygonOne);

    function drawPolygonOne(item) {

        var exteriorRing = [];

        if (item.geometry.type == "Polygon") {

            item.geometry.coordinates[0].forEach(drawPolygonThree);

            //Create array of locations to form a ring.


            function drawPolygonThree(item) {

                exteriorRing.push(({ latitude: item[0], longitude: item[1], altitude: 0, altitudeReference: -1 }));

                //new Microsoft.Maps.Location(item[0],item[1]); werkt ook //

            };
            //Create a polygon
            var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
                id: item.properties.objectid,
                fillColor: 'rgba(163, 176, 144, 0.5)',
                strokeColor: 'rgba(163, 176, 144)',
                strokeThickness: 2
            });

            //Add the polygon to map
            map.entities.push(polygon);
            Microsoft.Maps.Events.addHandler(polygon, 'click', function() {

                document.getElementById('infoField').innerHTML = item.properties.SAMENVATTING;

            });

        };
    };
};



//+ Map Color Style
const myStyle = {
    "version": "1.0",
    "settings": {

    },
    "elements": {

        "highway": {
            "strokeColor": "#F6CF65",
            "fillColor": "#FFF2AF",
            "labelOutlineColor": "#F6CF65",
            "labelVisible": false
        },
        "controlledAccessHighway": {
            "strokeColor": "#F6CF65",
            "fillColor": "#FFEBA1",
            "labelOutlineColor": "#F6CF65",
            "labelVisible": false
        },
        "arterialRoad": {
            "strokeColor": "#FFFFFF",
            "fillColor": "#FFFFFF"
        },
        "majorRoad": {
            "strokeColor": "#FFFFFF",
            "fillColor": "#FFFFFF",
            "labelOutlineColor": "#ffffff"
        },

    }
};