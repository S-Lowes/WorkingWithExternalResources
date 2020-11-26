function getData(cb) { // 'cb' standing for call back. 
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) { //I don't need to use a timeout because we are explicitly envoking our get data function.
    console.log(data);
}

getData(printDataToConsole);