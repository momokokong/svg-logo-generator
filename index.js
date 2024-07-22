// index.js
// This file is the starting point of the README generator which prepares the required modules, 
// initialize constant variables, set up prompts and validations, then call the generateMarkdown module
// to process user inputs and save the generated README.md in ./md/ 
// The generator requires npm modules inquirer, colors, validator, and EM6 module fs, and a self-made module generateMarkdown.

// init the modules as global variables
const inquire = require("inquirer");
const validator = require("validator");
const fs = require('fs');


// constant questions.  not expecting to have any changes.
const questions = [
  "\n============================\n May I have your user name?\n============================\n",
  "\n============================\n and email address?\n============================\n",
  "\n============================\n Tiltle of the project?\n============================\n", 
  "\n============================\n A short description:\n============================\n",
  "\n============================\n Installation steps:\n============================\n",
  "\n============================\n How to use it?\n============================\n",
  "\n============================\n Any license?\n============================\n",
  "\n============================\n Contributing?\n============================\n",
  "\n============================\n Tests\n============================\n",
];

// constant licenses.  not expecting to have any changes.
const licenses = [
  "WTFPL",
  "MIT",
  "BSD 3-Clause",
  "CC0",
  "GNU GPL v3",
  "No license"
]

// function writeToFile(data)
// write data to ./md/README.md
// parameter:
//   data: string, contains the whole README.md content returned from generateMarkdown
function writeToFile(data) {
  fs.writeFile("./examples/logo.svg", data, (err) =>
    err ? console.log(err) : console.log(color.rainbow("\nSee ya!")));
}


// function checkEmpty(str)
// validate str on whether the user entered something.  Used by the prompts.
// parameter:
//   str: string, the user's current input
function checkEmpty(str) {
  if (!validator.isEmpty(str.trim())) {
    return true;
  }
  return color.bgRed("You must enter something.  Try again");
}

// function collectReadme()
// invoke prompts to collect user inputs, then invoke generateMarkdown to generate the string content and pass that to writeToFile.
function collectSVGInfo() {
  inquire.prompt([
    {
      type: 'input',
      message: color.inverse(questions[4]),
      name: "installation",
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[5]),
      name: "usage",
      validate: checkEmpty,
    },
    {
      type: 'list',
      message: color.inverse(questions[6]),
      name: "license",
      choices: licenses,
      validate: checkEmpty,
    },
    {
      type: 'input',
      message: color.inverse(questions[7]),
      name: "contributing",
      validate: checkEmpty,
    },
  ])
  .then((logo) => 
    toSVG(logo))
  .then((svg) =>
    writeToFile(svg)
  )
  .catch((error) => 
     console.log(error)
  );
}

// function init()
// Prep the user regarding what this is then invoke collectReadme to start generating README.md.
function init() {
  console.log("\nGenerated logo.svg in folder ./examples/");
  collectSVGInfo();
}

// Function call to initialize app
init();
