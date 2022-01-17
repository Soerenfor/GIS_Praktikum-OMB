namespace Client {
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/concertEvents";

    interface Konzert {
        _id?: string;
        interpret: string;
        preis: number;
    }

    async function requestTextWithGET(url: RequestInfo): Promise<string> {
        let response: Response = await fetch(url);
        let text: string = await response.text();
        return text;
    }
    requestTextWithGET(url + path);
    displayKonzerte();


    let interpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret") as HTMLInputElement;
    let price: HTMLInputElement = <HTMLInputElement>document.getElementById("price") as HTMLInputElement;
    let button: HTMLElement = document.getElementById("enter-Button");


    async function sendJSONStringWithPOST(
        url: RequestInfo,
        jsonString: string
    ): Promise<void> {
        await fetch(url, {
            method: "post",
            body: jsonString
        });
    }


    button.addEventListener("click", () => {
        
            sendJSONStringWithPOST(
                "http://localhost:3000/concertEvents",
                JSON.stringify({
                    Interpret: interpret.value,
                    Preis: price.value
                    
                })
            )
    });

    async function requestKonzert(): Promise<Konzert[]> {
        let response: Response = await fetch(
            `http://localhost:3000/concertEvents?concerts`
        );
        let schrift: string = await response.text();
        return JSON.parse(schrift) as Konzert[];
    }

    async function displayKonzerte(): Promise<void> {
        let Konzerte: Konzert[] = await requestKonzert();
        let tbody: HTMLTableElement = <HTMLTableElement> document.getElementById("table");
        
        for (let Konzert of Konzerte) {
            let tr: HTMLTableRowElement = document.createElement("tr");
            tr.dataset.id = Konzert._id;
            for (let info of [
                Konzert.interpret,
                Konzert.preis
            ]) {
                let td: HTMLElement = document.createElement("td");
                td.textContent = `${info}`;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

}