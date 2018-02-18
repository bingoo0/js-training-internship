var strBuilderModified = function(collection, callback) {


    for (let i = 0; i < collection.length; i++) {

        var elements = collection[i];

        var isNumber = typeof(elements) === typeof(1) ? true : false;

        if (isNumber) {

            callback(collection[i], elements);

        } else {

            callback(collection[i], elements);

        }
    }
}

var printModifiedStrBuilder = strBuilderModified(["This", "is", "super", "sample", "text", 10, 30, 40, 60], function(element, number) {

    var result = [];

    if (number > 25) {

        number += number;

        for (let i = 0; i < number; i++) {

            result += "*";

        }

        console.log(element + result);

    } else if (number < 25) {

        number *= 2;
        for (let i = 0; i < number; i++) {

            result += "*";

        }

        console.log(element + result);

    } else {

        console.log(element + "*");
    }
});