function updateEvent(collection, id) {

    function createEvent(collection) {

        return Object.keys(collection).forEach(function(key) {

            if (key == id) {
                collection[key]['eventName'] = "new event";
            }

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
        eventName: 'Sample Event',
        event: ' Grand Opening of new Club',
        access: true
    },
    2: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
}, 1));