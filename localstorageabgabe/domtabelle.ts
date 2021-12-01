namespace EventTabelle {

  const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
  const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
  const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
  const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter-Button");
  const saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save-button");
  const loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load-button");
  
  
  button.addEventListener("click", buttonHandler);
  saveButton.addEventListener("click", saveButtonHandler);
  loadButton.addEventListener("click", loadButtonHandler);
  
 

  function buttonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);
    
    const neuLöschen: HTMLButtonElement = document.createElement("button");
    
    neuLöschen.textContent = "Event-Löschen";
    neuLöschen.style.color = "black";
    neuLöschen.className = "löschButton";
    neuLöschen.type = "submit";
    neuLöschen.addEventListener("click", löschButtonHandler);

    const neueInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    neueInterpretElement.textContent = interpretValue;
    const neuePriceElement: HTMLTableCellElement = document.createElement("td");
    neuePriceElement.textContent = String(priceValue);
    const neueZeile: HTMLTableRowElement = document.createElement("tr"); 

    display.appendChild(neueZeile);
    neueZeile.appendChild(neueInterpretElement);
    neueZeile.appendChild(neuePriceElement); 
    neueZeile.appendChild(neuLöschen);

    function löschButtonHandler(): void {
      neueZeile.removeChild(neueInterpretElement);
      neueZeile.removeChild(neuePriceElement);
      neueZeile.removeChild(neuLöschen);
    }
}

 
  interface ConcertEvent {
    interpret: string;
    price: number;
 }
  
  
  function saveButtonHandler(): void {
  
  let array: ConcertEvent[] = []; 
  array.push({
      interpret: inputIntpret.value,
      price: Number (inputPrice.value)
  });
 
  let arraystring: string = JSON.stringify(array); 
  localStorage.setItem("gis_praktikum_input", arraystring);
  
}
  let arrayIGotFromLocalStorage: ConcertEvent ; 
 
  function loadButtonHandler(): void {
    let stringFromLocalStorage: string = localStorage.getItem("gis_praktikum_input");
    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);
    console.log("aktuelle Wert im Localstorage" + stringFromLocalStorage);
    display.textContent = stringFromLocalStorage;
    
}
}
  
  
