// The kitchen. Orders in, answers out.
const http = require(`http`);

const server = http.createServer((request, response) => {
  response.end(`GearCheck kitchen: open!`);
});

server.listen(3000, () => {
  console.log(`Kitchen listening on http://localhost:3000`);
});
