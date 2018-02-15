function createEvent(collection) {

    var getCurrentDate = Date();

    return Object.keys(collection).forEach(function(key) {
        console.log(collection[key]);
        console.log(getCurrentDate);

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