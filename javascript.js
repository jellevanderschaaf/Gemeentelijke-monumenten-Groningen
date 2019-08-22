let map;

function GetMap() {
    map = new Microsoft.Maps.Map('#bingMap', {
        center: new Microsoft.Maps.Location(53.21917, 6.56667),
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        zoom: 13,
        customMapStyle: myStyle
    });
}

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