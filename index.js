// index.js
// This file is the starting point of the SVG generator which prepares the required modules, 
// initialize constant variables, set up prompts and validations, then call the Shape module to create the SVG elements.
// Eventually save the generated SVG in ./examples/ 
// The generator requires npm modules inquirer, validator, and EM6 module fs, and a self-made module Shape.

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
//   data: string, contains the whole SVG XML element
function writeToFile(data) {
  fs.writeFile("./examples/logo.svg", data, (err) =>
    err ? console.log(err) : console.log("\n\nGenerated logo.svg in the folder ./examples/"));
}


// function checkText(str)
// validate str on whether the user entered something and is less than 4 chars.  Used by the prompts.
// parameter:
//   str: string, the user's current input
function checkText(str) {
  if (!validator.isEmpty(str.trim()) && str.trim().length < 4) {
    return true;
  }
  return "You must enter something up to 3 characters.  Try again.";
}

// function checkColor(str)
// validate str on whether the user entered an valid 6 digit hexadecimal number.  Used by the prompts.
// parameter:
//   str: string, the user's current input
function checkColor(str) {
  const regex = new RegExp(/^[0-9a-f]{6}$/i);
  if (regex.test(str)) {
    return true;
  }
  return "Make sure it's a 6 digit hexadecimal(0-9, A-F) number. Try again.";
}

// function collectSVGInfo()
// invoke prompts to collect the SVG info, call the selected Shape module to generate the SVG XML then write to file 
function createSVG() {
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
// Prep the user and initiate the generator
function init() {
  console.log("\nThis is a .SVG logo generator.  You can enter up to 3 letters logo text, pick a shape and assign color for each.");
  createSVG();
}

// Function call to initialize app
init();
