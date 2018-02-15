var forEachFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {

        result[i] = callback(collection[i]);

    }

    return result;
}

function callbackFunc(collection) {

    return collection;
}

console.log("--- For Each Function ---")


var printForEachFunc = forEachFunc([1, 2, 3, 4], callbackFunc);
console.log(printForEachFunc);



console.log("--- Filter Function ---")

var filterFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {

        if (collection[i] % 2 == 0) {
            result[i] = callback(collection[i]);
        }
    }

    return result;

}

function filter(collection) {

    return collection;
}

var printFilterFunc = filterFunc([2, 4, 5, 19, 12], filter);
console.log(printFilterFunc);


console.log("--- Map Function ---")

var mapFunc = function(collection, callback) {

    var result = [];
    for (let i = 0; i < collection.length; i++) {

        result[i] = callback(collection[i]);

    }

    return result;
}

function map(collection) {

    return collection * 2;
}

var printMapFunc = mapFunc([1, 2, 3, 4], map);

console.log(printMapFunc);


console.log("--- Fill Function ---")

var fillFunc = function(emptyCollection, collection, n) {
    var result = [];

    for (let i = 0; i < n; i++) {

        result[i] = collection[i];
        emptyCollection[i] = result[i];

        if (result[i] == undefined) {

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
    for (let i = 0; i < collection.length; i++) {

        var getFirstElement = collection[i];
        var getLastElement = collection[collection.length - 1 - i];

        getFirstElement = getLastElement;
        getLastElement = getFirstElement;

        result[i] = getFirstElement;
        result[i] = getLastElement;

    }

    return result;
}

var printReverseFunc = reverseFunc([1, 2, 3, 4, 5]);
console.log(printReverseFunc);