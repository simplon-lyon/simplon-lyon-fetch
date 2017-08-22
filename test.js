const fetch = require('./index');

fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(answer) {
        console.log(answer);
        process.exit(0);
    }).catch(function(err) {
        console.error(err);
        process.exit(1);
    });