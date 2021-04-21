// jshint esversion:6

// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'what is your project name?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a licence for your project?',
        choices: ['GPL', 'MIT', 'LGPL']
    },
    {
        type: 'input',
        name: 'test',
        message: 'enter all the name your projects used in your application?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'give me a description of your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'show or describe how to instll your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'show or descibe how to use your project?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('The Readme.md file has been generated successfully.')

    });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then( answers => {
            writeToFile(`README.md`, generateMarkdown(answers))
    })

    
};


// Function call to initialize app

init()
