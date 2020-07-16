// code away!
const server = require("./server");
const PORT = 4000;

server.get('/', (req, res) => {
    
    res.send(`
    <h2>Lambda Hubs</h2>
    <p>Welcome${nameInsert} to the Lambda</p>`)
})
server.listen(PORT, () => {
    console.log(`\n *** Server running at http://localhost:${PORT}... *** \n`);
  });
  
  module.exports = server;
  
