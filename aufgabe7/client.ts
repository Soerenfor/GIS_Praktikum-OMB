namespace EventTabelle {

  const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
  const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
  const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
  const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter-Button");
  button.addEventListener("click", buttonHandler);
  
  interface KonzertEvent{
    interpret: string;
    price: number;
  }
    
    
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
    let konzertEvent: KonzertEvent = {
      interpret: interpretValue, 
      price: priceValue
    };
    post(konzertEvent);
}

  async function post(konzertEvent: KonzertEvent): Promise<void> {
  console.log(konzertEvent);
  await fetch("http://localhost:3000/concertEvents", {
    method: "POST",
    body: JSON.stringify(konzertEvent)
  });
}
}