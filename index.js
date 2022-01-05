const inquirer = require('inquirer');
const fs = require('fs');
var output = '';
// Use writeFileSync method to use promises instead of a callback function




const questions =[
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title this project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Write a description of this project',
    },
    {
        type: 'input',
        name: 'Built With',
        message: 'What did you use to build this project?',
      },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project:',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How is this application used? Be descriptive:',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List resources used and additional contributors:',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What licence would you like to use?',
        choices: ['MIT','Apache 2.0','GNU GPL 3.0']
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What tests can be run?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'Link to repository:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email address:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Your gitHub username:',
      },
    ];


function promptUser(){

inquirer.prompt(questions).then((answers) => {
    fs.writeFile('README.md', `# ${answers.Title}

  ## Table of Contents  
  1.[Description](#Description)  
  2.[Installation](#Installation)  
  3.[Usage](#Usage)  
  4.[Credits](#Credits)  
  5.[License](#License)  
  6.[Badges](#Badges)  
  7.[Contribute](#Contribute)  
  8.[Tests](#Tests)  

  ## Description  
  ${answers.Description}  
  ## Deployed Application  
  ${answers.Deployed}  
  ## Github Repo  
  ${answers.repo}  
  ## Installation  
  ${answers.Installation}  
  ## Usage  
  ${answers.Usage}  
  ## Credits   

  ## Questions
  Contact me with additional questions:  
  Email me at: <${answers.email}>  
  Or contact me through GitHub: [My gitHub profile](https://github.com/${answers.username})

  ## License  

  
  
  ## Contribute  
  // ${answers.Contribute}  
  ## Tests  
  // ${answers.Tests}  
  
  `,
  err => {
    if (err) {
      console.error(err)
      return

    }
  }
    )})};

console.log(output);
// function buildLicenseFile(selection) {
//     return `# ${getLicense (selection)}`;
// };

var badge = function licenseBadge(License) {
    let badge;
    switch (License) {
        case "MIT":


        badge = { selection: "MIT", color: "blue" };
        break;
        case "Apache 2.0":
        badge = { selection: "Apache 2.0", color: "green" };
        break;
        case "GNU GPL 3.0":
        badge = { selection: "GNU+GPL+3.0", color: "red" };
        break;
    }
    
    return `![License](https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
};
console.log(badge);


// Bonus using writeFileSync as a promise
function init() {
    promptUser();
    licenseBadge();
        // Use writeFileSync method to use promises instead of a callback function
        // .then((answers) => fs.writeFileSync('README.md', buildREADME(answers)))
        // .then((answers) => fs.writeFileSync('LICENSE.md', buildLicenseFile(answers)))
        // .then(() => console.log('Successfully wrote to readme.md'))
        // .catch((err) => console.error(err));
}

console.log(output);



init();