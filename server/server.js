// The kitchen. Orders in, answers out.
const http = require(`http`);

const server = http.createServer((request, response) => {
  console.log(`Request:`, request.method, request.url);
  response.end(`GearCheck server running`);
});

server.listen(3000, () => {
  console.log(`Kitchen listening on http://localhost:3000`);
});
