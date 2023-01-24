const inquirer = require('inquirer');
const fs = require('fs');

function renderLicense(licName) {
    if (licName === "Apache license 2.0") {
        return('Copyright 2022 Licensed under the Apache License, Version 2.0 the "License" you may not use this file except in compliance with the License.You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
        )
    }
    if (licName === "MIT") {
        return(
            'Copyright 2022 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
        )
    }
    if (licName === "GNU GENERAL PUBLIC LICENSE v3.0") {
        return(
            'Copyright (C) 2022 This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/'
        )
    }
}

function renderBadge(licName) {
    if (licName === "Apache license 2.0") {
        return(
            "License-Apache 2.0-blue"
        )
    }
    if (licName === "MIT") {
        return(
            "License-MIT-brightgreen"
        )
    }
    if (licName === "GNU GENERAL PUBLIC LICENSE v3.0") {
        return(
            "License-GNU v3-red"
        )
    }
}

function renderContrib(contBool) {
  if (contBool == true) {
      return(
          `If you would like to contribute to the project under the [Contributor Covenant](https://www.contributor-covenant.org/) Code of Conduct please reach out to me at ${answers.question}`
      )
  } else {
    return(
      'Thank you for your interest, but at this time the project is not open for contributions'
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

## Usage

${answer.usage}

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    "![alt text](assets/images/screenshot.png)"

## License  
![License Badge](https://img.shields.io/badge/${renderBadge(answer.license)})

${renderLicense(answer.license)}

## Contributing

${renderContrib(answer.contributing)}

## Tests

${answer.tests}

## Questions

${answer.questions}
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
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
        //set this list to assign a paragraph of text not just the license name
      type: 'list',
      message: 'What license are you using?',
      name: 'license',
      choices: ['Apache license 2.0', 'MIT', 'GNU GENERAL PUBLIC LICENSE v3.0'],
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