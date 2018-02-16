function templateEngine(placeholder, kvp) {

    var pattern = /{{\w+}}/;
    var result = pattern.test(placeholder);
    var match = pattern.exec(placeholder);

    if (result) {

        for (var key in kvp) {

            var getValue = kvp[key];
            key = "{{" + key + "}}";

            if (key == match[0]) {

                placeholder = placeholder.replace(pattern, getValue)
            }
        }
    }

    return placeholder;

}

var templateObj = {

    template: "For This unit"
}

var template = templateEngine("This is sample text {{template}}",
    templateObj);

console.log(template);