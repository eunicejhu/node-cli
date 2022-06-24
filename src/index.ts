#! /usr/bin/env node

import { log } from "@zuoqinhu/utils";
import yargs from "yargs";

yargs
  .scriptName("zhu")
  .usage("$0 <cmd> [args]")
  .command(
    "greet [name]",
    "Welcome to my daily!",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "Friend",
        describe: "the name to say hello to",
      });
    },
    (argv) => {
      log("Hello", argv.name, ", welcome to my Daily!");
    }
  )
  .help().argv;
