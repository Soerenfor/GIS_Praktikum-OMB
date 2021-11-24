namespace EventTabelle {

  const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
  const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
  const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
  const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter-Button");
  button.addEventListener("click", buttonHandler);
  
  class einzelEvent {
    private interpret: string;
    private price: number;
    constructor(interpret: string, price: number) {
        this.interpret = interpret;
        this.price = price;
    }
    Interpretzurück(): string {
        return this.interpret;
    }

    Pricezurück(): number {
        return this.price;
    }
    
    tabelleEintragen(event: einzelEvent): void {
      let interpretValue: string = String(event.Interpretzurück);
      let priceValue: number = Number(event.Pricezurück);
      
      const neuLöschen: HTMLButtonElement = document.createElement("button");
      neuLöschen.textContent = "Lösch-Event";
      neuLöschen.style.color = "black";
      neuLöschen.className = "lösch-Button";
      neuLöschen.type = "submit";
      
      const neueInterpretElement: HTMLTableCellElement = document.createElement("td"); 
      neueInterpretElement.textContent = interpretValue;
      const neuePriceElement: HTMLTableCellElement = document.createElement("td");
      neuePriceElement.textContent = String(priceValue);
      const neueReihe: HTMLTableRowElement = document.createElement("tr"); 
  
      display.appendChild(neueReihe);
      neueReihe.appendChild(neueInterpretElement);
      neueReihe.appendChild(neuePriceElement); 
      neueReihe.appendChild(neuLöschen);
  
      Eventszusammen.storeEvent(new Event(interpretValue , priceValue));
  
      function löschButtonHandler(): void {
        neueReihe.removeChild(neueInterpretElement);
        neueReihe.removeChild(neuePriceElement);
        neueReihe.removeChild(neuLöschen);
      }
  
  }

  show(): string {
    return `Der Eintritt bei ${this.interpret} kostet ${this.price}`;
}
}

  class Eventszusammen {
  private static events: Event [] = [];
  static loadEventszusammen(): void {
      let eventsJSON: string = localStorage.getItem("events" || "[]");
      for (let event of JSON.parse(eventsJSON)) {
          this.events[this.events.length] = new Event(event.x , event.y);
      }
  }
  static tabelleFüllen(): void { 
      for (let event of this.events) {
          Eventszusammen.events.tabelleEintragen(event);
      }
  }
  static storeEvent(event: Event): void{
      this.events.push(event);
      this.events[this.events.length] = event;
      localStorage.setItem("events", JSON.stringify(this.events));
  }
}
  Eventszusammen.loadEvents();
  Eventszusammen.tabelleFüllen();

  
  function buttonHandler(): void {
      let interpretValue: string = inputIntpret.value;
      let priceValue: number = Number(inputPrice.value);
      
      const neuLöschen: HTMLButtonElement = document.createElement("button");
      neuLöschen.textContent = "Lösch-Event";
      neuLöschen.style.color = "black";
      neuLöschen.className = "lösch-Button";
      neuLöschen.type = "submit";
      
      neuLöschen.addEventListener("click", löschButtonHandler);
  
      const neueInterpretElement: HTMLTableCellElement = document.createElement("td"); 
      neueInterpretElement.textContent = interpretValue;
      const neuePriceElement: HTMLTableCellElement = document.createElement("td");
      neuePriceElement.textContent = String(priceValue);
      const neueReihe: HTMLTableRowElement = document.createElement("tr"); 
  
      display.appendChild(neueReihe);
      neueReihe.appendChild(neueInterpretElement);
      neueReihe.appendChild(neuePriceElement); 
      neueReihe.appendChild(neuLöschen);

      Eventszusammen.storeEvent(new Event(interpretValue , priceValue));
  
      function löschButtonHandler(): void {
          neueReihe.removeChild(neueInterpretElement);
          neueReihe.removeChild(neuePriceElement);
          neueReihe.removeChild(neuLöschen);
      }
  }
  
  function tabelleFüllen(event: einzelEvent): void {
    let interpretValue: string = String(event.Interpretzurück);
    let priceValue: number = Number(event.Pricezurück);
    
    const neuLöschen: HTMLButtonElement = document.createElement("button");
    neuLöschen.textContent = "Lösch-Event";
    neuLöschen.style.color = "black";
    neuLöschen.className = "lösch-Button";
    neuLöschen.type = "submit";
    neuLöschen.addEventListener("click", löschButtonHandler);

    const neueInterpretElement: HTMLTableCellElement = document.createElement("td"); 
    neueInterpretElement.textContent = interpretValue;
    const neuePriceElement: HTMLTableCellElement = document.createElement("td");
    neuePriceElement.textContent = String(priceValue);
    const neueReihe: HTMLTableRowElement = document.createElement("tr"); 

    display.appendChild(neueReihe);
    neueReihe.appendChild(neueInterpretElement);
    neueReihe.appendChild(neuePriceElement); 
    neueReihe.appendChild(neuLöschen);

    Eventszusammen.storeEvent(new Event(interpretValue , priceValue));

    function löschButtonHandler(): void {
      neueReihe.removeChild(neueInterpretElement);
      neueReihe.removeChild(neuePriceElement);
      neueReihe.removeChild(neuLöschen);
    }

}

}
  
