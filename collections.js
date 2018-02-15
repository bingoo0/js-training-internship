var forEachFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
}



console.log("--- For Each Function ---")


var printForEachFunc = forEachFunc([1, 2, 3, 4], function(element) {
    console.log(element);
});



console.log("--- Filter Function ---")

var filterFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {

        if (callback(collection[i])) {
            result.push(collection[i]);
        }
    }

    return result;

}


var printFilterFunc = filterFunc([2, 4, 5, 19, 12], function(element) {
    return element % 2 == 0;
});
console.log(printFilterFunc);


console.log("--- Map Function ---")

var mapFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {

        result[i] = callback(collection[i]);

    }

    return result;
}


var printMapFunc = mapFunc([1, 2, 3, 4], function(element) {

    return element * 2;
});

console.log(printMapFunc);


console.log("--- Fill Function ---")

var fillFunc = function(emptyCollection, collection, n) {
    var result = [];

    for (let i = 0; i < n; i++) {

        emptyCollection[i] = collection[i];


        if (emptyCollection[i] == undefined) {

            emptyCollection[i] = collection[Math.floor(Math.random() * collection.length)];
        }

    }

    return emptyCollection;
}

var printFillFunc = fillFunc([], [1, 2, 3, 4, "a"], 9)
console.log(printFillFunc);


console.log("--- Reverse Function ---")

var reverseFunc = function(collection) {

    var result = [];
    for (let i = collection.length - 1; i >= 0; i--) {

        result[i] = collection[collection.length - 1 - i];

    }

    return result;
}

var printReverseFunc = reverseFunc([1, 2, 3, 4, 5]);
console.log(printReverseFunc);