import * as http from "http";
import * as mongo from "mongodb";


const hostname: string = "127.0.0.1"; 
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; 
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      
      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

      interface Event {
  _id?: mongo.ObjectId;
  interpret: string;
  price: number;
}

      async function main(): Promise<void> {
  await mongoClient.connect();
  const db: mongo.Db = mongoClient.db("interpret");
  const eventCollection: mongo.Collection = db.collection("concertEvents");

  let newEvent: Event = {
    interpret: "Ed Sheeran",
    price: 120
  };
  await eventCollection.insertOne(newEvent);
  let events: Event[] = <Event[]>(
    await eventCollection.find({ interpret: "Ed Sheeran"}).toArray()
  );
  console.log(events);
  await mongoClient.close();
}

      server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
    }

);