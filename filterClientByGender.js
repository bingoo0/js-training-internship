function filterClient(collection, gender) {

    return Object.keys(collection).map(function(objectKey, index) {
        var value = collection[objectKey]['gender'];
        if (value == gender) {
            console.log(collection[objectKey]["clientName"]);
        }
    });
}

function filterGender(collection, gender) {

    return Object.keys(collection).map(function(objectKey, index) {
        var value = collection[objectKey]['gender'];
        if (value == gender) {
            console.log(collection[objectKey]["clientName"]);
        }
    });
}


//var male = filterGender(collection, gender);
// var female = filterGender(collection, gender);


filterClient([{
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

filterGender([{
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
        clientName: 'Ivana Ivanova',
        gender: 'female',
        age: 21
    }
], 'male');