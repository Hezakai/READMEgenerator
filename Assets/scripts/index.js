const inquirer = require('inquirer');
const fs = require('fs');

//Sets the license text based on the license chosen by the user
function renderLicense(licName) {
  if (licName === "Apache license 2.0") {
    return ('Copyright 2022 Licensed under the Apache License, Version 2.0 the "License" you may not use this file except in compliance with the License.You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
    )
  }
  if (licName === "MIT") {
    return (
      'Copyright 2022 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
    )
  }
  if (licName === "GNU GENERAL PUBLIC LICENSE v3.0") {
    return (
      'Copyright (C) 2022 This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/'
    )
  }
}

//Builds the license badge base on the license chosen by the user
function renderBadge(licName) {
  if (licName === "Apache license 2.0") {
    return (
      "License-Apache%202.0-blue"
    )
  }
  if (licName === "MIT") {
    return (
      "License-MIT-brightgreen"
    )
  }
  if (licName === "GNU GENERAL PUBLIC LICENSE v3.0") {
    return (
      "License-GNU%20v3-red"
    )
  }
}

//Sets the text used in the README for the contributions section based on whether or not the user wants contirubtions
function renderContrib(contBool, email) {
  if (contBool == true) {
    return (
      `If you would like to contribute to the project under the [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct please reach out to me at ${email}`
    )
  } else {
    return (
      'Thank you for your interest, but at this time the project is not open for contributions'
    )
  }
}

//The README template used
const readmeGen = (answer) => {
  return `
# ${answer.name} 
![License Badge](https://img.shields.io/badge/${renderBadge(answer.license)})

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

## Usage

${answer.usage}

## License  

${renderLicense(answer.license)}

## Contributing

${renderContrib(answer.contributing, answer.email)}

## Tests

${answer.tests}

## Questions

If you have any qestions please feel free to reach out to us via [GitHub](${answer.github}) or by e-mailing us at mailto:${answer.email}
`};

//console prompts for building the README
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Write a bried project Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'PLease add the steps to install the project.',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['Apache license 2.0', 'MIT', 'GNU GENERAL PUBLIC LICENSE v3.0'],
    },
    {
      type: 'input',
      message: 'Please input your GitHub profile address for the contact section.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please input your e-mail address for the contact section.',
      name: 'email',
    },
    {
      type: 'confirm',
      message: 'Would you like to allow contributors?',
      name: 'contributing',
    },
  ])

  //pulls in the answers and writes the README file
  .then((answer) => {
    const readmeContent = readmeGen(answer);
    fs.writeFile("Generated README/README.md", readmeContent, (err) => err ? console.log(err) : console.log('Successfully created README file'));
  });