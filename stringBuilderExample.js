var strBuilder = function(collection, callback) {

    return callback(collection);
}

var printStrBuilder = strBuilder(["This", "is", "super", "sample", "text"], function(element) {

    return element.join("*");
});

console.log(printStrBuilder);