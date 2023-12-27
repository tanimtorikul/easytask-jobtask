const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://easytask:a4nvJ48miunFKSog@cluster0.o2yungw.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const tasksCollection = client.db("easytask").collection("tasks");

    // task post api

    app.post("/tasks", async (req, res) => {
      const task = req.body;
      const result = await tasksCollection.insertOne(task);
      res.send(result);
    });

    app.get("/tasks", async (req, res) => {
      const email = req.query.email;
      const query = { userEmail: email };
      const result = await tasksCollection.find(query).toArray();
      res.send(result);
    });

    app.delete("/tasks/:id", async (req, res) => {
      const taskId = req.params.id;
      const objectId = new ObjectId(taskId); 

      const result = await tasksCollection.deleteOne({ _id: objectId });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("easy task server is running");
});

app.listen(port, () => {
  console.log(`Easy task is running on port ${port}`);
});
