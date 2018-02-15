function createEvent(collection) {

    var printCurrentDate = getCurrentDate();

    return Object.keys(collection).forEach(function(key) {
        console.log(collection[key]);
        console.log(printCurrentDate);

    });
}

function getCurrentDate() {

    var getCurrentDate = Date();

    return getCurrentDate;
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