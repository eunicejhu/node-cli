#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@zuoqinhu/utils");
var yargs_1 = __importDefault(require("yargs"));
yargs_1.default
    .scriptName("zhu")
    .usage("$0 <cmd> [args]")
    .command("greet [name]", "Welcome to my daily!", function (yargs) {
    yargs.positional("name", {
        type: "string",
        default: "Friend",
        describe: "the name to say hello to",
    });
}, function (argv) {
    (0, utils_1.log)("Hello", argv.name, ", welcome to my Daily!");
})
    .help().argv;
