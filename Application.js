const container = require("./container");

class Application {
  constructor() {
    this._container = null;
  }

  loadSetup() {
    this._container = container.configureContainer();
    return this;
  }

  async start() {
    const { server } = this._container.cradle;
    await server.start();
  }
}

module.exports = Application;
