const express = require("express");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const mongoose = require("mongoose");

var app = express();
const port = 3000;
const url = "mongodb://localhost:27017/mydb";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("open", () => {
  console.log("connected to DB");
});

db.on("error", console.error.bind(console, "conection error"));

app.get("/", (req, res) => {
  res.send("Default Route");
});

app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`); // 'Listening at http://localhost:' + port
});
