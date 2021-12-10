import { urlToHttpOptions } from "url";

namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/converteDate";

    const datum: HTMLFormElement = <HTMLFormElement>document.getElementById("Datum");
    const sendbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    const display: HTMLElement = <HTMLElement>document.getElementById("display"); 
    
    sendbutton.addEventListener("click", function(evt: Event) {
        evt.preventDefault();
        sendform();
    });

    console.log(datum, sendbutton);

    async function sendform(): Promise <void> {
        let formData: FormData = new FormData(datum);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlwithQuery: string = url + path + "?" + query.toString(); 

        let response: Response = await fetch(urlwithQuery);
        let responseText: string = await response.text();

        let ausgabe: HTMLElement = document.createElement("div");
        ausgabe.textContent = responseText;
        display.appendChild(ausgabe);
        console.log(responseText);
        
    }
}