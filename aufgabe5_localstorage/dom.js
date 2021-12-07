"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("enter-Button");
    button.addEventListener("click", ButtonHandler);
    let events = [];
    class Event {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        set interpretName(name) {
            this.interpret = name;
        }
        get interpretName() {
            return this.interpret;
        }
        set priceZahl(price) {
            this.price = price;
        }
        get priceZahl() {
            return this.price;
        }
    }
    ladeArray();
    zeigeArray(events);
    function ButtonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let event = new Event(interpretValue, priceValue);
        events.push(event);
        console.log(events);
        let neuTR = document.createElement("tr");
        let neuInterpret = document.createElement("td");
        neuInterpret.textContent = interpretValue;
        let neuPrice = document.createElement("td");
        neuPrice.textContent = String(priceValue);
        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", function () {
            löschEvent(neuTR, event);
        });
        deleteButton.style.color = "black";
        deleteButton.textContent = "Event Löschen";
        display.appendChild(neuTR);
        neuTR.appendChild(neuInterpret);
        neuTR.appendChild(neuPrice);
        neuTR.appendChild(deleteButton);
        saveArray();
    }
    function löschEvent(parentElement, event) {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1, 1);
        console.log(events);
        saveArray();
    }
    function saveArray() {
        let arrayString = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function ladeArray() {
        let stringFromLocalStorage = localStorage.getItem("event");
        let arrayIGotFromStorage = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] = event;
        }
    }
    function zeigeArray(aktuelleEvents) {
        for (let aktuellerEvent of aktuelleEvents) {
            let interpretValue = aktuellerEvent.interpret;
            let priceValue = aktuellerEvent.price;
            let neuTR = document.createElement("tr");
            let neuInterpret = document.createElement("td");
            neuInterpret.textContent = interpretValue;
            let neuPrice = document.createElement("td");
            neuPrice.textContent = String(priceValue);
            let löschButton = document.createElement("button");
            löschButton.addEventListener("click", function () {
                löschEvent(neuTR, aktuellerEvent);
            });
            löschButton.style.color = "black";
            löschButton.textContent = "Event Löschen";
            display.appendChild(neuTR);
            neuTR.appendChild(neuInterpret);
            neuTR.appendChild(neuPrice);
            neuTR.appendChild(löschButton);
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=dom.js.map