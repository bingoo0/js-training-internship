var forEachFunc = function(collection) {

    return collection.forEach(element => {

        console.log(element);

    });
}

console.log("--- For Each Function ---")

var printForEachFunc = forEachFunc([1, 2, 3, 4]);

console.log("--- Filter Function ---")

var filterFunc = function(collection) {

    return collection.filter(element => {

        if (element % 2 == 0) {
            console.log(element);
        }
    })
}

var printFilterFunc = filterFunc([2, 4, 5, 19, 12]);

console.log("--- Map Function ---")

var mapFunc = function(collection) {

    return collection.map(element => {
        console.log(element * 3);
    })
}

var printMapFunc = mapFunc([1, 2, 3, 4]);

console.log("--- Fill Function ---")

var fillFunc = function(emptyCollection, collection, n) {

    return console.log(collection.fill(emptyCollection, collection, n));

}

var printFillFunc = fillFunc([1], [1, 2, 3, 4, "a"], 9)

console.log("--- Reverse Function ---")

var reverseFunc = function(collection) {

    return console.log(collection.reverse());

}

var printReverseFunc = reverseFunc([1, 2, 3, 4, 5]);