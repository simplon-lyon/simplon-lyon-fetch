var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url) {
    return new Promise(function(ok, ko) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                ok(xhr.response);
            } else {
                ko(xhr.status)
            }
        };
        xhr.onerror = function(error) {
            ko(error);
        }
        xhr.send();
    });
};
module.exports = fetch;