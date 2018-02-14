function deleteEvent(collection, id) {

    for (let key in collection) {
        if (collection.hasOwnProperty(key) && key == id) {

            delete collection[key];

        }
    }

    return Object.keys(collection).forEach(function(key) {
        console.log(collection[key]);
    });
}


console.log(deleteEvent([{
    eventName: 'Sample Event',
    event: ' Grand Opening of new Club',
    age: '18+'
}, {
    eventName: 'Sample Events',
    event: ' Grand Opening of new Club',
    age: '18+'
}], 0));