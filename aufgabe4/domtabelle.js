"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("enter-Button");
    button.addEventListener("click", buttonHandler);
    class einzelEvent {
        interpret;
        price;
        constructor(interpret, price) {
            this.interpret = interpret;
            this.price = price;
        }
        Interpretzurück() {
            return this.interpret;
        }
        Pricezurück() {
            return this.price;
        }
        tabelleEintragen(event) {
            let interpretValue = String(event.Interpretzurück);
            let priceValue = Number(event.Pricezurück);
            const neuLöschen = document.createElement("button");
            neuLöschen.textContent = "Lösch-Event";
            neuLöschen.style.color = "black";
            neuLöschen.className = "lösch-Button";
            neuLöschen.type = "submit";
            const neueInterpretElement = document.createElement("td");
            neueInterpretElement.textContent = interpretValue;
            const neuePriceElement = document.createElement("td");
            neuePriceElement.textContent = String(priceValue);
            const neueReihe = document.createElement("tr");
            display.appendChild(neueReihe);
            neueReihe.appendChild(neueInterpretElement);
            neueReihe.appendChild(neuePriceElement);
            neueReihe.appendChild(neuLöschen);
            Eventszusammen.storeEvent(new Event(interpretValue, priceValue));
            function löschButtonHandler() {
                neueReihe.removeChild(neueInterpretElement);
                neueReihe.removeChild(neuePriceElement);
                neueReihe.removeChild(neuLöschen);
            }
        }
        show() {
            return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
        }
    }
    class Eventszusammen {
        static events = [];
        static loadEventszusammen() {
            let eventsJSON = localStorage.getItem("events" || "[]");
            for (let event of JSON.parse(eventsJSON)) {
                this.events[this.events.length] = new Event(event.x, event.y);
            }
        }
        static tabelleFüllen() {
            for (let event of this.events) {
                Eventszusammen.events.tabelleEintragen(event);
            }
        }
        static storeEvent(event) {
            this.events.push(event);
            this.events[this.events.length] = event;
            localStorage.setItem("events", JSON.stringify(this.events));
        }
    }
    Eventszusammen.loadEvents();
    Eventszusammen.tabelleFüllen();
    function buttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        const neuLöschen = document.createElement("button");
        neuLöschen.textContent = "Lösch-Event";
        neuLöschen.style.color = "black";
        neuLöschen.className = "lösch-Button";
        neuLöschen.type = "submit";
        neuLöschen.addEventListener("click", löschButtonHandler);
        const neueInterpretElement = document.createElement("td");
        neueInterpretElement.textContent = interpretValue;
        const neuePriceElement = document.createElement("td");
        neuePriceElement.textContent = String(priceValue);
        const neueReihe = document.createElement("tr");
        display.appendChild(neueReihe);
        neueReihe.appendChild(neueInterpretElement);
        neueReihe.appendChild(neuePriceElement);
        neueReihe.appendChild(neuLöschen);
        Eventszusammen.storeEvent(new Event(interpretValue, priceValue));
        function löschButtonHandler() {
            neueReihe.removeChild(neueInterpretElement);
            neueReihe.removeChild(neuePriceElement);
            neueReihe.removeChild(neuLöschen);
        }
    }
    function tabelleFüllen(event) {
        let interpretValue = String(event.Interpretzurück);
        let priceValue = Number(event.Pricezurück);
        const neuLöschen = document.createElement("button");
        neuLöschen.textContent = "Lösch-Event";
        neuLöschen.style.color = "black";
        neuLöschen.className = "lösch-Button";
        neuLöschen.type = "submit";
        neuLöschen.addEventListener("click", löschButtonHandler);
        const neueInterpretElement = document.createElement("td");
        neueInterpretElement.textContent = interpretValue;
        const neuePriceElement = document.createElement("td");
        neuePriceElement.textContent = String(priceValue);
        const neueReihe = document.createElement("tr");
        display.appendChild(neueReihe);
        neueReihe.appendChild(neueInterpretElement);
        neueReihe.appendChild(neuePriceElement);
        neueReihe.appendChild(neuLöschen);
        Eventszusammen.storeEvent(new Event(interpretValue, priceValue));
        function löschButtonHandler() {
            neueReihe.removeChild(neueInterpretElement);
            neueReihe.removeChild(neuePriceElement);
            neueReihe.removeChild(neuLöschen);
        }
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=domtabelle.js.map