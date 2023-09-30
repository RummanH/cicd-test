const express = require("express");
const app = express();
const port = process.env.PORT || 5001; // You can choose any available port

// Define a route for the "/hello" endpoints
app.get("/hello", (req, res) => {
  res.send("Hello");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
