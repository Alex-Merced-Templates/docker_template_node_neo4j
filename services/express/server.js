// import dependencies
import express from "express";
import neo4j from "neo4j-driver";

// create application object
const app = express();

// connect to data
const db = neo4j.driver("bolt://neo:7687");

//home route
app.get("/", async (req, res) => {
  const result = await db
    .session({
      database: "neo4j",
      defaultAccessMode: neo4j.session.WRITE,
    })
    .run("Match(p:Person) Where p.name='Alex Merced' Return p;");
  res.json(await result);
});

// Server Listener
app.listen(5000, () => console.log("listening on 5000"));
