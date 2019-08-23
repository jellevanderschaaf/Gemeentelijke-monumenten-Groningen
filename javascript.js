let map;

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




function GetMap() {
    map = new Microsoft.Maps.Map('#bingMap', {
        center: new Microsoft.Maps.Location(53.21917, 6.56667),
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        zoom: 13,
        customMapStyle: myStyle
    });

    var center = map.getCenter();

    //Create array of locations to form a ring.
    var exteriorRing = [

        new Microsoft.Maps.Location(53.2143976144322, 6.567017548907246),
        new Microsoft.Maps.Location(53.214515425380405, 6.566944518487769),
        new Microsoft.Maps.Location(53.214499929155735, 6.566886398731741),
        new Microsoft.Maps.Location(53.21449976813698, 6.566886506617812),
        new Microsoft.Maps.Location(53.21449863056725, 6.566882291280076),
        new Microsoft.Maps.Location(53.214396034096794, 6.566952533317292),
        new Microsoft.Maps.Location(53.21439644958186, 6.566954146511089),
        new Microsoft.Maps.Location(53.214396930725734, 6.566956027973599),
        new Microsoft.Maps.Location(53.214371531669464, 6.566973197784018),
        new Microsoft.Maps.Location(53.214383187529094, 6.567026152526608),
        new Microsoft.Maps.Location(53.2143976144322, 6.567017548907246)

    ];


    //Create a polygon
    var polygon = new Microsoft.Maps.Polygon(exteriorRing, {
        fillColor: 'rgba(0, 255, 0, 0.5)',
        strokeColor: 'red',
        strokeThickness: 2
    });

    //Add the polygon to map
    map.entities.push(polygon);

}



// Ajax // 

var getMonumentData = new XMLHttpRequest();
getMonumentData.open('GET', 'https://ckan.dataplatform.nl/dataset/7c5c81f1-8efa-4ed4-8483-15181b261b39/resource/98a3ba8d-b3b8-4602-bfe2-e987caad734f/download/gem_groningen_gemeentelijke_monumenten.json');
getMonumentData.onload = function() {
    var data = JSON.parse(getMonumentData.responseText);


    var coords = data.features[0].geometry.coordinates[0];

    coords.forEach(swapCoordinates);

    function swapCoordinates(item) {

        var coordinateOne = item.shift();
        item.push(coordinateOne);
        console.log(coords);

    };

    document.getElementById("infoFieldTwo").innerHTML = coords;


};
getMonumentData.send();