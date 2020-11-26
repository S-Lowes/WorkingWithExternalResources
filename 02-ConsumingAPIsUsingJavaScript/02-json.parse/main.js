var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //Getting data from server, Get or Post most used methods.
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //xhr ready state, mozilla dev network lists the 5 states. (4 operation complete)
        data = this.responseText; // ^ HTTP status code of 200 means; ok, request succeeded, content delivered.
    };
}

console.log(data);