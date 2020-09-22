// Function to generate markdown for README
function generateMarkdown(answers) {

  // Generates badge based on prompt input
  let badge = `https://img.shields.io/badge/license-${answers.license}-brightgreen`;
  badge = encodeURI(badge);
    
  // Formats prompt input into README.md file
  return `
    
# ${answers.title}
![badge](${badge})
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#test)
* [Questions](#questions)
* [Contributing Authors](#contributors)
* [License](#license)
    
# Description
${answers.description}
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}
            
## Tests
${answers.tests}
            
## Questions
All questions regarding this application can be directed to: \n 
<a href="${answers.githubLink}">${answers.github}</a> \n
<a href="mailto:${answers.email}">${answers.email}</a>
    
# Contributing Authors
${answers.contributors}
    
# License
${answers.license}
    
`;
}

module.exports = generateMarkdown;
