"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("enter-Button");
    button.addEventListener("click", buttonHandler);
    function buttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const neuLöschen = document.createElement("button");
        neuLöschen.textContent = "Event-Löschen";
        neuLöschen.style.color = "black";
        neuLöschen.className = "löschButton";
        neuLöschen.type = "submit";
        neuLöschen.addEventListener("click", löschButtonHandler);
        const neueInterpretElement = document.createElement("td");
        neueInterpretElement.textContent = interpretValue;
        const neuePriceElement = document.createElement("td");
        neuePriceElement.textContent = String(priceValue);
        const neueZeile = document.createElement("tr");
        display.appendChild(neueZeile);
        neueZeile.appendChild(neueInterpretElement);
        neueZeile.appendChild(neuePriceElement);
        neueZeile.appendChild(neuLöschen);
        function löschButtonHandler() {
            neueZeile.removeChild(neueInterpretElement);
            neueZeile.removeChild(neuePriceElement);
            neueZeile.removeChild(neuLöschen);
        }
        let konzertEvent = {
            interpret: interpretValue,
            price: priceValue
        };
        post(konzertEvent);
    }
    async function post(konzertEvent) {
        console.log(konzertEvent);
        await fetch("http://localhost:3000/concertEvents", {
            method: "POST",
            body: JSON.stringify(konzertEvent)
        });
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=client.js.map