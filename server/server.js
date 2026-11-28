// The kitchen. Orders in, answers out.
const http = require(`http`);

const server = http.createServer((request, response) => {
  console.log("Request:", request.method, request.url);
  if (request.url === `/`) {
    response.end("GearCheck home");
  } else if (request.url === `/about`) {
    response.end("GearCheck, by Tonton Georges. Learning project.");
  } else if (request.url === `/sword`) {
    response.end("item: sword, damage 12");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
server.listen(3000, () => {
  console.log("Kitchen listening on http://localhost:3000");
});
