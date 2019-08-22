let map;

function GetMap() {
    map = new Microsoft.Maps.Map('#bingMap', {
        center: new Microsoft.Maps.Location(53.21917, 6.56667),
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        zoom: 13
    });
}