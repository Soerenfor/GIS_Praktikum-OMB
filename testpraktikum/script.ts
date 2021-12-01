namespace testNamespace{

    
    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input-interpret"); //Verweis auf Interpret Input-Feld
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price"); //Verweis auf Preis Input-Feld
    const display: HTMLElement = <HTMLElement>document.querySelector("#display"); //Verweis auf das Display-Elternelement
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas"); //Verweis auf den Button

    
    myButton.addEventListener("click", mybuttonHandler); 

    
    console.log(inputIntpret);
    console.log(inputPrice);
    

    function mybuttonHandler(){
        
        let interpretValue: string = inputIntpret.value; 
        let priceValue: number = Number(inputPrice.value); 

        let newElement= document.createElement("div");
        let deletebutton: HTMLButtonElement= document.createElement("button");
        deletebutton.textContent = "Löschen"

       

        newElement.textContent= interpretValue + "; "+ priceValue; 
        display.appendChild(newElement); 
        newElement.appendChild(deletebutton);

        deletebutton.addEventListener("click", function(){
            deleteEvent (newElement)
        });

      
}

       function deleteEvent(parentElement:HTMLDivElement): void{
           display.removeChild(parentElement);

}

}