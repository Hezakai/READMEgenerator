const inquirer = require('inquirer');
const fs = require('fs');

function renderLicense(licName) {
    if (licName === "MIT") {
        return(
            "MIT LICENSE INFO"
        )
    }
}

function renderBadge(licName) {
    if (licName === "MIT") {
        return(
            "MIT-testmessage-blue"
        )
    }
}

const readmeGen = (answer) => {
return`
# ${answer.name}

## Description

${answer.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answer.install}

## Credits

${answer.credits}

## License  ![License Badge](https://img.shields.io/badge/${renderBadge(answer.license)})

${renderLicense(answer.license)}
`};

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
      choices: ['Apache license 2.0', 'Artistic license 2.0', 'MIT'],
    },
    {
    type: 'input',
    message: 'If your project has a lot of features, list them here.',
    name: 'features',
  },
  ])

  .then((answer) => {
    const readmeContent = readmeGen(answer);
    fs.writeFile("Generated README/README.md",readmeContent, (err) => err ? console.log(err) : console.log('Successfully created README file!'));
  });