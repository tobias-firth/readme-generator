const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Briefly describe your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What package do you need to install to use the project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Please provide some guidence for those wishing to contribute',
      name: 'contribution',
    },
    {
      type: 'list',
      message: 'Please provide the name of the license (lowercase only)',
      name: 'license',
      choices: ["mit", "apache", "eclipse", "perl"]
    },
    {
      type: 'input',
      message: 'Please provide information about testing your project',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please provide an email address so people can ask you questions',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please enter your github username',
      name: 'github',
    },
  ])
  .then((response) => {
    console.log(response)
    const readmeContent = 
`
![${response.license}](./assets/${response.license}.png)

# ${response.title}

## Table of Contents 
* [Description](#Description)
* [Installation](#Description)
* [Usage](#Usage)
* [Licence](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${response.description}
## Installation
~~~bash
npm i ${response.install}
~~~
## Usage 
~~~javascript
  const ${response.install} = require("${response.install}")
~~~
##License 
This Project is covered under the [${response.license}](https://choosealicense.com/licenses/${response.license}) licence. 

## Contributing 
${response.contribution}

## Tests
${response.tests}

## Questions
Please see my github profile: [${response.github}](https://github.com/${response.github})
Please send any questions you have to [${response.email}](mailto:${response.email})
`;

fs.writeFile("readme.md",readmeContent,(err) => err ? console.log("err") : console.log("success"))})