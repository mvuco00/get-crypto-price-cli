const inquirer = require("inquirer");
const { isRequired } = require("../utils/validation");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green,
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log(key);

      console.log("Current API Key: ", key.yellow);

      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    console.log("hello from remove");
  },
};

module.exports = key;
