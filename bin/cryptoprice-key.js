const program = require("commander");

program
  .command("set")
  .description("Set API key")
  .action(() => console.log("hi from set"));

program
  .command("show")
  .description("Show API key")
  .action(() => console.log("hi from show"));

program
  .command("remove")
  .description("Remove API key")
  .action(() => console.log("hi from remove"));

program.parse(process.argv);
