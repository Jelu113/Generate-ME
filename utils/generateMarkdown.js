// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('hello')
  return `# ${data.title} 
 ${renderLicenseBadge(data.license)}
 ## Description
 ${data.deployed}
 ${data.motive}
 ${data.why}
 ${data.solve}
 ${data.learn}
 ${data.standout}
 ${data.challenges}
 ${data.change}
## Table of Contents 
## Installation
${data.install}
## Usage
${data.usage}
## Credits
${data.credits}
## License
## Badges
## Features
${data.features}
## How to contribute
${data.contribute}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
