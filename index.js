// TODO: Include packages needed for this applicatio
//fs path inquirer generateMarkdown funcction from utils
const inquirer = require('inquirer');
const fs = require('fs');

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const readmeGen = `
# ${answer.name}

## Description

${answer.description}



## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answer.install}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

${answer.credits}

## License

${answer.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//use fs to write a new file with the data returned from your generateMarkdown function

// TODO: Create a function to initialize app
function init() {
    //start your inquirer prompt, passing in your questions array
    //.then with the repsonses
    //call your writeTOFile function passing in the values it needs
    //writeToFile(README', generateMarkdown, )
}

// Function call to initialize app
init();






fs.writeFile("README.md",readmeGen, (err) =>{})

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Project Description? eg - What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Steps for installation?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.',
      name: 'credits',
    },
    {
        //set this list to assign a paragraph of text not just the license name
      type: 'list',
      message: 'What license are you using?',
      name: 'license',
    },
  ])

  .then((answers) => {
    const answers = Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join('\n');
    fs.appendFileSync('answers.txt', answers);}
  );


  
