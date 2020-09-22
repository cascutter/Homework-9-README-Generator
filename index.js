// Required dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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

// Function to initialize program
async function init() {
    console.log ("Answer the prompts to generate a README.md.")
    try {
        const answers = await promptUser();
        const README = generateMarkdown(answers);

        await writeFileAsync("README.md", README);
        console.log("Sucessfully wrote to README.md");
    } catch(err) {
        console.log(err)
    }
}

// Function call to initialize program
init();
