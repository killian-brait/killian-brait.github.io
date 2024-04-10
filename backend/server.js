const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/chat", async (req, res) => {
  // This is where you'll handle the chat input and call OpenAI's API
  // For now, we'll just send back a placeholder response
  res.json({ message: "Chat response coming soon..." });
});

// Simple route for testing
app.get("/test", (req, res) => {
  res.send("The server is up and running!");
});


//

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
