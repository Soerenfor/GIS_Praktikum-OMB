namespace EventTabelle {

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
    const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
    const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter-Button");
    button.addEventListener("click", buttonHandler);
    get();
    
    interface KonzertEvent {
      interpret: string;
      price: number;
    }
    
    function buttonHandler(): void {
        let interpretValue: string = inputIntpret.value;
        let priceValue: number = Number(inputPrice.value);
    
        const neuesInterpretElement: HTMLTableCellElement = document.createElement("td"); 
        neuesInterpretElement.textContent = interpretValue;
        const neuerPriceElement: HTMLTableCellElement = document.createElement("td");
        neuerPriceElement.textContent = String(priceValue);
        const neueReihe: HTMLTableRowElement = document.createElement("tr"); 
    
        display.appendChild(neueReihe);
        neueReihe.appendChild(neuesInterpretElement);
        neueReihe.appendChild(neuerPriceElement); 
        
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
    
    async function get(): Promise<void> {
      let response: Response = await fetch("http://localhost:3000/concertEvents", {
        method: "GET"
      });
      let text: string = await response.text();
      let konzerte: KonzertEvent[] = JSON.parse(text) as KonzertEvent[];
      for (let konzert of konzerte) {
        print(konzert);
      }
    }
    
    function print(konzertEvent: KonzertEvent): void {
      let newInterpret: string = konzertEvent.interpret;
      let newPrice: number = konzertEvent.price;
    
      const neuesInterpretElement: HTMLTableCellElement = document.createElement("td"); 
      neuesInterpretElement.textContent = newInterpret;
      const neuerPriceElement: HTMLTableCellElement = document.createElement("td");
      neuerPriceElement.textContent = String(newPrice);
      const neueReihe: HTMLTableRowElement = document.createElement("tr"); 
    
      display.appendChild(neueReihe);
      neueReihe.appendChild(neuesInterpretElement);
      neueReihe.appendChild(neuerPriceElement);
    }
    
    }