// TODO: Create a function that returns a license badge based on which license is passed in

// const { Http2ServerRequest } = require("http2");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;   
    case 'Apache license 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'Mozilla Public License 2.0':
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    default:
      return ''
          
    }
 


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;   
    case 'Apache license 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'Mozilla Public License 2.0':
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    default:
      return ''
          
    }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return licenseText.AGPLv3;
    case 'GNU GPLv3':
      return licenseText.GPLv3;
    case 'MIT':
      return licenseText.MIT;   
    case 'Apache license 2.0':
      return licenseText.Apache;
    case 'Mozilla Public License 2.0':
      return licenseText.Mozilla
    default:
      return ''
          
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {return`
# ${answers.projectName}
https://github.com/${answers.github}/${answers.projectName}
#Description
${answers.Description}
# Table of content
* [installation](#installation)
* [usage](#usage)
* [License](#License)
* [contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application.
# Usage
In order to use this app, ${answers.usage}
# License
This projected is license under the ${answers.License} License.
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# contributing
contributors: ${answers.Contributing}
# Tests
The followingis needed to run the test: ${answers.Tests}
# Questions
If you have any questions about the repo, open an issue or contact ${answers.usage}`}


 

module.exports = generateMarkdown;
