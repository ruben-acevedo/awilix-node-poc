const awilix = require("awilix");
const Server = require("./server");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

const configureContainer = () => {
  container
    .register({
      container: awilix.asValue(container),
    })
    .loadModules(["./server.js"]);
  return container;
};

module.exports = { container, configureContainer };
