function createEvent(collection) {

    return Object.keys(collection).forEach(function(key) {
        console.log(collection[key]);
    });
}

createEvent({
    eventName: 'Sample Event',
    event: ' Grand Opening of new Club',
    age: '18+'
});