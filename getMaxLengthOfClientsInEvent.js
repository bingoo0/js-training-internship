function addClient(collection) {

    return Object.keys(collection).forEach(function(key) {

        if (collection[key]["age"] < 18) {
            console.log("you are under 18")
            delete collection[key];
        }

        console.log(collection[key]);
    });
}

function collectionLength(clients) {
    return Object.keys(collection).forEach(function(key) {

        if (collection[key]["age"] < 18) {
            console.log("you are under 18")
            delete collection[key];
        }

        return collection.length;
    });
}

function findMaxLength() {

    var getMaxLength = addClient(clients);
    var maxLength = Number.MIN_VALUE;
    var lengthOfCollection = collectionLength.length;

    for (let i = 0; i < lengthOfCollection; i++) {

        if (lengthOfCollection > maxLength) {

            maxLength = lengthOfCollection;
        }

        if (lengthOfCollection == 0) {

            console.log("Don't have any registered clients");
        }

    }

    console.log(maxLength)
}



var clients = [{
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 14
    },
    {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 34
    },
    {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 21
    },
    {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 21
    }
];



addClient([{
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 14
    },
    {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 34
    },
    {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 21
    }
]);

findMaxLength();