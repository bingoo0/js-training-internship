function addClient(collection) {

    return Object.keys(collection).forEach(function(key) {

        if (collection[key]["age"] < 18) {
            console.log("you are under 18")
            delete collection[key];
        }

        console.log(collection[key]);
    });
}


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