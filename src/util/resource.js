exports.loadImage = function(path, callback) {
    var img = document.createElement("img");
    img.addEventListener("load", function() {
        callback(img);
    }, false);
    img.src = path;
};

exports.loadImages = function(paths, callback) {
    var count = paths.length;
    var images = {};

    for(var i = 0; i < count; i++) {
        var path = paths[i];
        var name = paths[i].split(".")[0];
        images[name] = new Image();
        //images[name].crossOrigin="anonymous";
        images[name].onload = function() { if(--count == 0) { callback(images); } };
        images[name].src = path;
    }
}
