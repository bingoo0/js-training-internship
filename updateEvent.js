function updateEvent(collection) {

    function createEvent(collection) {

        return Object.keys(collection).forEach(function(key) {
            console.log(collection[key]);
        });
    }

    createEvent(collection);
}


function createEvent(collection) {

    return Object.keys(collection).forEach(function(key) {
        collection[key];
    });
}

createEvent({
    1: {
        eventName: 'Sample Event',
        event: ' Grand Opening of new Club',
        access: true
    },
    2: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
});

console.log(updateEvent({
    1: {
        eventName: 'Sample Event123',
        event: ' Grand Opening of new Club',
        access: true
    },
    2: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
}));