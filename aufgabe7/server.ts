import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

async function dbFind(
    db: string,
    collection: string,
    requestObject: any,
    response: http.ServerResponse) {
    
      await mongoClient.connect();
      let result = await mongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
      response.setHeader("Content-Type", "application/json");
      response.write(JSON.stringify(result));
  }
async function dbAddOrEdit(
  db: string,
  collection: string,
  request: http.IncomingMessage
) {
  let jsonString = "";
  request.on("data", data => {
    jsonString += data;
  });
}

const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      // response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
      
      switch (url.pathname) {
        case "/concertEvents": {
          await mongoClient.connect();
          switch (request.method) {
            case "GET":
              await dbFind(
                "interpret",
                "price",
                {
                  price: Number(url.searchParams.get("price")), // von String zu Zahl konvertieren
                },
                response
              );
              break;
            case "POST":
              await dbAddOrEdit("interpret", "price", request);
              break;
              }
              break;
            }
            default:
              response.statusCode = 404;
      }
      response.end();
    }
  );
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });