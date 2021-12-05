namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/greetings";

    const formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
    const sendbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    
    sendbutton.addEventListener("click", function(evt: Event) {
        evt.preventDefault();
        sendform();
    });

    console.log(formular, sendbutton);



    async function sendform(): Promise <void> {
        let formData: FormData = new FormData(formular);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlwithQuery: string = url + path + "?" + query.toString(); 

        let response: Response = await fetch(urlwithQuery);
        let responsetext: string = await response.text();
        console.log(responsetext);



    }
}