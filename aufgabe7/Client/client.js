"use strict";
var Client;
(function (Client) {
    const url = "http://127.0.0.1:3000";
    const path = "/concertEvents";
    async function requestTextWithGET(url) {
        let response = await fetch(url);
        let text = await response.text();
        return text;
    }
    requestTextWithGET(url + path);
    displayKonzerte();
    let interpret = document.getElementById("interpret");
    let price = document.getElementById("price");
    let button = document.getElementById("enter-Button");
    async function sendJSONStringWithPOST(url, jsonString) {
        await fetch(url, {
            method: "post",
            body: jsonString
        });
    }
    button.addEventListener("click", () => {
        sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
            Interpret: interpret.value,
            Preis: price.value
        }));
    });
    async function requestKonzert() {
        let response = await fetch(`http://localhost:3000/concertEvents?concerts`);
        let schrift = await response.text();
        return JSON.parse(schrift);
    }
    async function displayKonzerte() {
        let Konzerte = await requestKonzert();
        let tbody = document.getElementById("table");
        for (let Konzert of Konzerte) {
            let tr = document.createElement("tr");
            tr.dataset.id = Konzert._id;
            for (let info of [
                Konzert.interpret,
                Konzert.preis
            ]) {
                let td = document.createElement("td");
                td.textContent = `${info}`;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map