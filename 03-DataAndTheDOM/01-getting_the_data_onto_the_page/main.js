const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) { //Type comes from the API
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data; //grab the div with the ID of data & set the inner html with the data passed to it.
    });
}