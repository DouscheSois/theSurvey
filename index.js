const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();

// to be able to use req.body middleware
app.use(express.json({ extended: false }));

app.use("/form", require("./routes/form"));

//Serve Static Files in Production
if (process.env.Node_ENV === "production") {
  //Set Static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
