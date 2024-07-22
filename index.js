// index.js
// This file is the starting point of the README generator which prepares the required modules, 
// initialize constant variables, set up prompts and validations, then call the generateMarkdown module
// to process user inputs and save the generated README.md in ./md/ 
// The generator requires npm modules inquirer, colors, validator, and EM6 module fs, and a self-made module generateMarkdown.

// init the modules as global variables
const inquire = require("inquirer");
const validator = require("validator");
const fs = require('fs');
const Shape = require("./lib/shapes.js");

// avialable shapes of the logo.  not expecting to have any changes.
const logoShapes = [
  "Circle",
  "Rectangle",
  "Triangle"
]

// function writeToFile(data)
// write data to ./md/README.md
// parameter:
//   data: string, contains the whole README.md content returned from generateMarkdown
function writeToFile(data) {
  fs.writeFile("./examples/logo.svg", data, (err) =>
    err ? console.log(err) : console.log("\n\nGenerated logo.svg in the folder ./examples/"));
}


// function checkEmpty(str)
// validate str on whether the user entered something.  Used by the prompts.
// parameter:
//   str: string, the user's current input
function checkText(str) {
  if (!validator.isEmpty(str.trim()) && str.trim().length < 4) {
    return true;
  }
  return "You must enter something up to 3 characters.  Try again.";
}

// function checkEmpty(str)
// validate str on whether the user entered something.  Used by the prompts.
// parameter:
//   str: string, the user's current input
function checkColor(str) {
  const regex = new RegExp(/[0-9a-f]{6}/i);
  if (regex.test(str)) {
    return true;
  }
  return "Make sure it's a 6 digit hexadecimal(0-9, A-F) number. Try again.";
}

// function collectReadme()
// invoke prompts to collect user inputs, then invoke generateMarkdown to generate the string content and pass that to writeToFile.
function collectSVGInfo() {
  inquire.prompt([
    {
      type: 'input',
      message: "\nUp to 3 characters for the logo text:",
      name: "text",
      validate: checkText,
    },
    {
      type: 'input',
      message: "\nColor of the logo text in 6 digit hexdecimal number:",
      name: "textColor",
      validate: checkColor,
    },
    {
      type: 'list',
      message: "\nPick a shape for the logo:\n",
      name: "shape",
      choices: logoShapes,
    },
    {
      type: 'input',
      message: "\nColor of the shape in 6 digit hexadecimal number:",
      name: "shapeColor",
      validate: checkColor,
    },
  ])
  .then((logo) => {
    const {text, textColor, shape, shapeColor} = logo;
    const svg = new Shape[shape](text, textColor, shape, shapeColor).render();
    console.log(svg);
    return svg;
  })
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
  console.log("\nThis is a .SVG logo generator.  You can enter up to 3 letters logo text, pick a shape and assign color for each.");
  collectSVGInfo();
}

// Function call to initialize app
init();
