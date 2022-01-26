require("dotenv").config();
const express = require("express");
const userRouter = require("./src/modules/user/userRouter");
const PORT = process.env.PORT || 5000;
const app = express();

class Server {
  start() {
    app.use(express.json());

    app.use("/user", userRouter);

    app.listen(PORT, () => console.log(`awilix-node-poc initiated at ${PORT}`));
  }
}

module.exports = Server;
