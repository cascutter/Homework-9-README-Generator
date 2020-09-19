const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
// array of questions for user
    return inquirer.prompt ([
        {
            type: "input",
            message: "Name your project.",
            name: "title"
        },
        {
            type: "input",
            message: "Give a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "List the topics for table of contents.",
            name: "tableOfContents"
        },
        {
            type: "input",
            message: "List the steps for installation.",
            name: "installation"
        },
        {
            type: "input",
            message: "Give information about how to use your project.",
            name: "usage"
        },
        {
            type: "input",
            message: "Explain how to run tests for this system.",
            name: "tests"
        },
        {
            type: "input",
            message: "List any commonly asked questions about this project.",
            name: "questions"
        },
        {
            type: "input",
            message: "Who holds the license to this project?",
            name: "license"
        },
        {
            type: "input",
            message: "List all contributing authors.",
            name: "contributors"
        },
    ]);
};

// function to write README file
function generateREADME(answers) {
    return (
        `# ${answers.title}

        ## Description 
        ${answers.description}
        
        ### Table of Contents
        ${answers.tableOfContents}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}
        
        ### Tests
        ${answers.test}
        
        ### Questions
        ${answers.questions}

        ### Contributing Authors
        ${answers.contributors}

        ### License
        ${answers.license}`
    )
}

// function to initialize program
async function init() {
    console.log ("hi")
    try {
        const answers = await promptUser();
        const README = generateREADME(answers);

        await writeFileAsync("README.md", README);
        console.log("Sucessfully wrote to README.md");
    } catch(err) {
        console.log(err)
    }
}

// function call to initialize program
init();
