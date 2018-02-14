function deleteEvent(collection, id) {

    for (var key in collection) {
        return Object.keys(collection).forEach(function(key) {
            if (key == id) {
                delete collection[key];
            }
            console.log(collection[key]);
        });
    }
}


console.log(deleteEvent({
    1: {
        eventName: 'Sample Event',
        event: ' Grand Opening of new Club',
        access: true
    },
    2: {
        eventName: 'Sample Event',
        event: ' Grand Opening of new Club',
        access: true
    },
    clientInfo: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
}, 1));