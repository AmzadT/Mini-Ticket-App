const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3002;

// Middleware for defaults
server.use(middlewares);

// Custom route for health check
server.get(`/`, (req, res) => {
    res.send(`Server is running fine.`);
});

// JSON Server router for handling CRUD operations
server.use(router);

// Middleware for 404
server.use((req, res) => {
    res.status(404).send(`404 Page Not Found`);
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} and connected to db.json`);
});
