#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Key")
  .parse(process.argv);

console.log("hello from cryptoprice");
console.log(process.argv[2]);