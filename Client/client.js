"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/greetings";
    const formular = document.getElementById("formular");
    const sendbutton = document.getElementById("send-button");
    sendbutton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendform();
    });
    console.log(formular, sendbutton);
    async function sendform() {
        let formData = new FormData(formular);
        let query = new URLSearchParams(formData);
        let urlwithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlwithQuery);
        let responsetext = await response.text();
        console.log(responsetext);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map