"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("enter-Button");
    button.addEventListener("click", buttonHandler);
    get();
    function buttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const neuesInterpretElement = document.createElement("td");
        neuesInterpretElement.textContent = interpretValue;
        const neuerPriceElement = document.createElement("td");
        neuerPriceElement.textContent = String(priceValue);
        const neueReihe = document.createElement("tr");
        display.appendChild(neueReihe);
        neueReihe.appendChild(neuesInterpretElement);
        neueReihe.appendChild(neuerPriceElement);
        let konzertEvent = {
            interpret: interpretValue,
            price: priceValue
        };
        post(konzertEvent);
    }
    async function post(konzertEvent) {
        console.log(konzertEvent);
        await fetch("http://localhost:3002/concertEvents", {
            method: "POST",
            body: JSON.stringify(konzertEvent)
        });
    }
    async function get() {
        let response = await fetch("http://localhost:3002/concertEvents", {
            method: "GET"
        });
        let text = await response.text();
        let konzerte = JSON.parse(text);
        for (let konzert of konzerte) {
            print(konzert);
        }
    }
    function print(konzertEvent) {
        let newInterpret = konzertEvent.interpret;
        let newPrice = konzertEvent.price;
        const neuesInterpretElement = document.createElement("td");
        neuesInterpretElement.textContent = newInterpret;
        const neuerPriceElement = document.createElement("td");
        neuerPriceElement.textContent = String(newPrice);
        const neueReihe = document.createElement("tr");
        display.appendChild(neueReihe);
        neueReihe.appendChild(neuesInterpretElement);
        neueReihe.appendChild(neuerPriceElement);
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=client.js.map