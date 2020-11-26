var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    };
}

setTimeout(function() { //The 2 parameters are; a call back function & a parameter in milliseconds.
    console.log(data);
}, 500); //Give the ^^ function enough time to retrieve the data correctly.