"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1";
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
let mongoClient = new mongo.MongoClient(mongoUrl);
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    async function main() {
        await mongoClient.connect();
        const db = mongoClient.db("interpret");
        const eventCollection = db.collection("concertEvents");
        let newEvent = {
            interpret: "Ed Sheeran",
            price: 120
        };
        await eventCollection.insertOne(newEvent);
        let events = (await eventCollection.find({ interpret: "Ed Sheeran" }).toArray());
        console.log(events);
        await mongoClient.close();
    }
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
//# sourceMappingURL=node.js.map