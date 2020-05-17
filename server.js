const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const googleRouter = require("./controllers/google");

const PORT = process.env.PORT || 3001;
const app = express();

// initialize mongodb connection
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", googleRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
