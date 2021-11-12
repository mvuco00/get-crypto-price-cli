const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  setKey(key) {
    this.conf.set("ApiKey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No API Key found");
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("ApiKey");
    if (!key) {
      throw new Error("No API Key found");
    }

    this.conf.delete("ApiKey");
    return;
  }
}

module.exports = KeyManager;
