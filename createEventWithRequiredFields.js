function createEvent(collection) {

    return Object.keys(collection).forEach(function(key) {

        if (key != "clientInfo") {
            var message = "";
            try {
                if (collection[key]["eventName"] == undefined) {
                    console.log("please text event name");
                    throw "please text event name";
                    delete collection[key];

                }
                console.log(collection[key]);
            } catch (error) {
                message = error;
            }


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

        event: ' Grand Opening of new Club',
        access: true
    },
    clientInfo: {
        clientName: 'Ivan Ivanov',
        gender: 'male',
        age: 18
    }
}));