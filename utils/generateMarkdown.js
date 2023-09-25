// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
    //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `-[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is licensed with a ${license} license.`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('hello')
  return `# ${data.title} 
 ${renderLicenseBadge(data.license)}  
 ${data.deployed}
 ## Table of Contents
-[Description](#description)  
-[Installation](#installation)  
-[Usage](#usage)  
-[Credits](#credits)  
-[License](#license)  
-[Badges](#badges)  
-[Features](#features)  
-[How to contribute](#contribute)  
-[Tests](#tests)  

 ## Description
 ${data.deployed}
 ${data.motive}
 ${data.why}
 ${data.solve}
 ${data.learn}
 ${data.standout}
 ${data.challenges}
 ${data.change}

## Installation
${data.install}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${renderLicenseSection(data.license)}
## Badges
## Features
${data.features}
## How to contribute
${data.contribute}
## Tests
${data.tests}
`;
}
renderLicenseLink()
renderLicenseSection()
module.exports = generateMarkdown;
