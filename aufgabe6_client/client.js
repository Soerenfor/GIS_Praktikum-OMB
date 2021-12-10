"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/converteDate";
    const datum = document.getElementById("Datum");
    const sendbutton = document.getElementById("send-button");
    const display = document.getElementById("display");
    sendbutton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendform();
    });
    console.log(datum, sendbutton);
    async function sendform() {
        let formData = new FormData(datum);
        let query = new URLSearchParams(formData);
        let urlwithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlwithQuery);
        let responseText = await response.text();
        let ausgabe = document.createElement("div");
        ausgabe.textContent = responseText;
        display.appendChild(ausgabe);
        console.log(responseText);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map