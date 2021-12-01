namespace localstorage {
    const inputFeld: HTMLInputElement = <HTMLInputElement>document.getElementById("input-element");
    const saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load-button");
    const display: HTMLDivElement = <HTMLDivElement> document.getElementById("display");

    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);

    function saveButtonHandler(): void {
    inputFeld.value;
    localStorage.setItem("gis_praktikum_input", inputFeld.value);

}

    function loadButtonHandler(): void {
    let valueFromLocalstorage: string = localStorage.getItem("gis_praktikum_input");
    console.log("aktuelle Wert im Localstorage" + valueFromLocalstorage);
    display.textContent = valueFromLocalstorage;

}
}