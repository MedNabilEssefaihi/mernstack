const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// routes
const usersRouter = require("./routes/users");
const clientsRouter = require("./routes/clients");
const rapportRouter = require("./routes/rapports");
const authRouter = require("./routes/auth");

require("dotenv").config();

//create server
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// database
const bdURI = process.env.ATLAS_URI;

mongoose
  .connect(bdURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(port))
  .catch((err) => console.log(err.message));

//request
app.use(authRouter);
app.use("/users", usersRouter);
app.use("/clients", clientsRouter);
app.use("/rapports", rapportRouter);

// 404
app.use((req, res) => {
  res.send("404");
  res.status(404);
});
