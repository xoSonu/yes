const FakePI = artifacts.require("FakePI");

module.exports = function (deployer) {
  deployer.deploy(FakePI);
};