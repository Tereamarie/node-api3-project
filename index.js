// code away!
const express = require("express");


const server = express();


server.get('/', (req, res) => {
    
    res.send(`
    <h2>Lambda Hubs</h2>
    <p>Welcome${nameInsert} to the Lambda</p>`)
})
server.listen(4000, () => {
    console.log("\n* Server Running on http://localhost:4000 *\n");
  });
  