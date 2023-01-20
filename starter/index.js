const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Where are you based?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Give a short bio about yourself',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your github username',
      name: 'github',
    },
    {
        type: 'input',
        message: 'What is your linkedin username',
        name: 'linkedin',
    },
  ])
  .then((response) => {
    const readmeContent = `<!DOCTYPE html>

    `;

    fs.writeFile("readme.md",htmlContent,(err) => err ? console.log("err") : console.log("success"))
  })