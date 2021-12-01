"use strict";
var EventTabelle;
(function (EventTabelle) {
    const inputIntpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.getElementById("display");
    const button = document.getElementById("enter-Button");
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    button.addEventListener("click", buttonHandler);
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
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
    }
    function saveButtonHandler() {
        let array = [];
        array.push({
            interpret: inputIntpret.value,
            price: Number(inputPrice.value)
        });
        let arraystring = JSON.stringify(array);
        localStorage.setItem("gis_praktikum_input", arraystring);
    }
    let arrayIGotFromLocalStorage;
    function loadButtonHandler() {
        let stringFromLocalStorage = localStorage.getItem("gis_praktikum_input");
        arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);
        console.log("aktuelle Wert im Localstorage" + stringFromLocalStorage);
        display.textContent = stringFromLocalStorage;
    }
})(EventTabelle || (EventTabelle = {}));
//# sourceMappingURL=domtabelle.js.map