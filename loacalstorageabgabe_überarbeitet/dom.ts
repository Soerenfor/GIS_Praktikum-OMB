namespace EventTabelle {

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price"); 
    const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
    const button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter-Button");
    button.addEventListener("click", ButtonHandler);
    let events: Event [] = [];
    
    class Event {
        interpret: string;
        price: number;
        constructor(interpret: string, price: number) {
            this.interpret = interpret;
            this.price = price;
        }
        set interpretName(name: string) {
            this.interpret = name;
        }
        get interpretName(): string {
            return this.interpret;
        }
        set priceZahl(price: number) {
            this.price = price;
        }
        get priceZahl(): number {
            return this.price;
        }
    }
    ladeArray();
    zeigeArray(events);
    
    function ButtonHandler(): void {
        let interpretValue: string = inputIntpret.value;
        let priceValue: number = Number(inputPrice.value);
    
        let event: Event = new Event(interpretValue, priceValue);
        events.push(event);
        console.log(events);
    
        let neuTR: HTMLTableRowElement = document.createElement("tr");
        let neuInterpret: HTMLTableCellElement = document.createElement("td");
        neuInterpret.textContent = interpretValue;
        let neuPrice: HTMLTableCellElement = document.createElement("td");
        neuPrice.textContent = String(priceValue);
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.addEventListener("click", function(): void {
            löschEvent(neuTR, event);
        });
        deleteButton.style.color = "black";
        deleteButton.textContent =  "Event Löschen";
    
        display.appendChild(neuTR);
        neuTR.appendChild(neuInterpret);
        neuTR.appendChild(neuPrice);
        neuTR.appendChild(deleteButton);
        saveArray();
    }
    function löschEvent(parentElement: HTMLDivElement , event: Event): void {
        display.removeChild(parentElement);
        events.splice(events.indexOf(event) - 1 , 1);
        console.log(events);
        saveArray();
    }
    function saveArray(): void {
        let arrayString: string = JSON.stringify(events);
        localStorage.setItem("event", arrayString);
    }
    function ladeArray(): void {
        let stringFromLocalStorage: string = localStorage.getItem("event");
        let arrayIGotFromStorage: Event [] = JSON.parse(stringFromLocalStorage);
        for (let event of arrayIGotFromStorage) {
            events[events.length] =  event;
        }
    }
    function zeigeArray(aktuelleEvents: Array<Event>): void {
        for (let aktuellerEvent of aktuelleEvents) {
        let interpretValue: string = aktuellerEvent.interpret;
        let priceValue: number = aktuellerEvent.price;
    
        let neuTR: HTMLTableRowElement = document.createElement("tr");
        let neuInterpret: HTMLTableCellElement = document.createElement("td");
        neuInterpret.textContent = interpretValue;
        let neuPrice: HTMLTableCellElement = document.createElement("td");
        neuPrice.textContent = String(priceValue);
        let löschButton: HTMLButtonElement = document.createElement("button");
        löschButton.addEventListener("click", function(): void {
            löschEvent(neuTR, aktuellerEvent);
        });
        löschButton.style.color = "black";
        löschButton.textContent =  "Event Löschen";
    
        display.appendChild(neuTR);
        neuTR.appendChild(neuInterpret);
        neuTR.appendChild(neuPrice);
        neuTR.appendChild(löschButton);
    }
    }
    }