import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; 
const port: number = 3002;
const mongoUrl: string = "mongodb://localhost:27017"; 
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

interface Events {
  _id: string;
  interpret: string;
  price: number;
}

async function dbFind(db: string, collection: string, requestObject: any, response: http.ServerResponse): Promise<void> {
  let result = await mongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
  }

async function dbAddOrEdit(db: string, collection: string, request: http.IncomingMessage): Promise<void> {
  let jsonString: string = "";
  request.on("data", data => {
    jsonString += data;
  });
  request.on("end", async () => {
    await mongoClient.connect();
    
    let events:
     Events = JSON.parse(jsonString);
    {
      events._id = undefined;
      mongoClient.db(db).collection(collection).insertOne(events);
    }
  });
}

const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      response.setHeader("Access-Control-Allow-Origin", "*"); // 
      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
      
      switch (url.pathname) {
        case "/concertEvents": {
          await mongoClient.connect();
          switch (request.method) {
            case "GET":
              await dbFind("db", "Events", {} , response );
              break;
            case "POST":
              await dbAddOrEdit("db", "Events", request);
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