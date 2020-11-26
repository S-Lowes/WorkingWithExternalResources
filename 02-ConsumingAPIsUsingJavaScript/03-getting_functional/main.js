var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) { //We have the same problem since the console.log at the bottom would need to be on line 10 for this to work.
    data = jsonData; //Need to use timeout or callbacks.
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText)); // Pass the text received from server as a JS Object.
    };
}

console.log(data);