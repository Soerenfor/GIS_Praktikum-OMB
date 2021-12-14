"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const datum = document.getElementById("Datum");
    const sendbutton = document.getElementById("send-button");
    const display = document.getElementById("display");
    sendbutton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendform();
    });
    async function sendform() {
        let formData = new FormData(datum);
        let query = new URLSearchParams(formData);
        let urlwithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlwithQuery);
        let responseText = await response.text();
        let ausgabe = document.createElement("p");
        ausgabe.textContent = responseText;
        display.appendChild(ausgabe);
        console.log(responseText);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map