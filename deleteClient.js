function deleteClient(collection, id) {

    function addClient(collection, id) {

        return Object.keys(collection).forEach(function(key) {

            if (collection[key]["age"] < 18) {
                delete collection[key];
            }

            if (key === id) {
                delete collection[key];
            }
            console.log(collection[key]);
        });
    }

    addClient(collection, id);
}

function addClient(collection, id) {

    return Object.keys(collection).forEach(function(key) {

        if (collection[key]["age"] < 18) {
            delete collection[key];
        }

        collection[key];
    });
}

addClient({
    1: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 14
    },
    2: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 34
    },
    3: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 21
    }
});

console.log(deleteClient({
    1: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 14
    },
    2: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 34
    },
    3: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 21
    }
}, "3"));