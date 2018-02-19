function templateEngine(placeholder, kvp) {

    var pattern = /{{([a-zA-Z-_\s]+)}}/;
    var result = pattern.test(placeholder);

    if (result) {

        for (let i = 0; i < placeholder.length; i++) {

            var match = [];

            for (var key in kvp) {

                match = pattern.exec(placeholder);

                if (match == null) {
                    break;
                }

                var getValue = kvp[key];

                if (key == match[1].trim()) {
                    placeholder = placeholder.replace(pattern, getValue);
                }
            }
        }
    }

    return placeholder;

}
var templateExamples = "This is test {{     somethingelse    }} {{       template}} {{     string    }}  {{     somethingelse    }}";
var templateObj = {

    template: "intern training",
    string: "task",
    somethingelse: function() {
        return "some stcvcvcvcvcing"
    }

}

var template = templateEngine(templateExamples, templateObj);

console.log(template);