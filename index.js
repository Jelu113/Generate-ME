// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'deployed',
    message: 'Please enter the link to your deployed project.',
  },
  {
    type: 'list',
    message: 'What license are you using?',
    name: 'license',
    choices: ['Apache_2.0', 'Boost', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'motive',
    message: 'What was your motivation for this project?',

  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',

  },
  {
    type: 'input',
    name: 'solve',
    message: 'What problem does it solve?',

  }, {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',

  },
  {
    type: 'input',
    name: 'standout',
    message: 'What makes your project stand out?',
  },
  {
    type: 'input',
    name: 'challenges',
    message: 'What challenges did you overcome?',
  },
  {
    type: 'input',
    name: 'change',
    message: 'What would you like to add, or change about your project?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps to installing your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use.',
  },{
    type: 'input',
    name: 'credits',
    message: 'Who worked with you on this project? list all 3rd party assets and any tutorials used.',
  },
  {
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here.',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can other contributors add to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run tests here.',
  },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}
// writeToFile();

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log(data)


      const template = generateMarkdown(data)
      console.log('template', template)
      writeToFile("README.md", template)
    })
}

// Function call to initialize app
init();

// # title
// ## Table of Contents
// 