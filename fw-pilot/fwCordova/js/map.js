document.addEventListener("deviceready", function () {
    var div = document.getElementById("map_canvas");
    if (div)
    {
        // embeded
        var map = plugin.google.maps.Map.getMap(div);
    }
    else
    {
        // full
        var map = plugin.google.maps.Map.getMap();
    }
    map.on(plugin.google.maps.event.MAP_READY, onMapReady);
});

function onMapReady(map) {
    // show full screen
    map.showDialog();
}