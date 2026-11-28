// The kitchen. Orders in, answers out.
const http = require(`http`);

const routes = {
  "/": "GearCheck home",
  "/about": "GearCheck, by Tonton Georges. Learning project.",
  "/sword": "item: sword, damage 12",
};

const server = http.createServer((request, response) => {
  console.log("Request:", request.method, request.url);

  const content = routes[request.url];

  if (content) {
    response.end(content);
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Kitchen listening on http://localhost:3000");
});
