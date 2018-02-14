function createEvent(collection) {

    return Object.keys(collection).forEach(function(key) {

        if (key != "clientInfo") {
            if (collection[key]["eventName"] == " ") {
                console.log("please text event name")
                delete collection[key];
            }

            console.log(collection[key]);
        }
    });

}


console.log(createEvent({
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
    3: {
        eventName: ' ',
        event: ' Grand Opening of new Club',
        access: true
    },
    clientInfo: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
}));