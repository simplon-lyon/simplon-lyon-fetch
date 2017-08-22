var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetch(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status)
            }
        };
        xhr.onerror = function(error) {
            reject(error);
        }
        xhr.send();
    });
};
module.exports = fetch;