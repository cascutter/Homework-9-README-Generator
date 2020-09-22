// Required dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Function with user prompts
function promptUser() {
    
// Array of questions for user
    return inquirer.prompt ([
        {
            type: "input",
            message: "Name your project:",
            name: "title"
        },
        {
            type: "input",
            message: "Provide a short description of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Provide the steps for installation:",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide information about your application usage:",
            name: "usage"
        },
        {
            type: "input",
            message: "Provide instructions for testing your application:",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "github"
        },
        {
            type: "input",
            message: "Provide the link to your GitHub profile:",
            name: "githubLink"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "input",
            message: "List all contributing authors:",
            name: "contributors"
        },
        {
            type: "checkbox",
            message: "Select the appropriate license:",
            name: "license",
            choices: [
                "GNU AGPLv3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
                "MIT License",
                "Boost Software License 1.0"
            ]
        },
    ]);
};

// Function to generate README file
function generateREADME(answers) {

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

`;}


// Function to initialize program
async function init() {
    console.log ("Answer the prompts to generate a README.md.")
    try {
        const answers = await promptUser();
        const README = generateREADME(answers);

        await writeFileAsync("README.md", README);
        console.log("Sucessfully wrote to README.md");
    } catch(err) {
        console.log(err)
    }
}

// Function call to initialize program
init();
