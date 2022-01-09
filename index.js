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
      {
        type: 'input',
        name: 'contribute',
        message: 'Ways to contribute:',
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'link to deployed application:',
      },
    ];


function promptUser(){

inquirer.prompt(questions).then((answers) => {
    fs.writeFile('README.md',
    
    `# ${answers.Title}
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
      [${answers.Title} is live!](${answers.deployed})
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
      ${answers.license}
      
      
      ## Contribute  
      ${answers.contribute}  
      ## Tests  
      ${answers.Tests}  
      
      `,

  // function badge(license) {
  //   let licenseIcon;
  //   switch (license) {
  //       case "MIT":
  //       licenseIcon = { name: "MIT", color: "blue"};
  //       break;
  //       case "Apache 2.0":
  //       licenseIcon = { name: "Apache+2.0", color: "green"};
  //       break;
  //       case "GNU GPL 3.0":
  //       licenseIcon = { name: "GNU+GPL+3.0", color: "red"};
  //       break;
  //   }
  //   return `![License](https://img.shields.io/static/v1?label=license&message=${licenseIcon.name}&color=${licenseIcon.color})`;    
  
  // },
  // console.log(badge());
  err =>{
  if(err){
    console.log(err)
  }
})
  return answers;
})

};

var content = () => {
  return `# ${answers.Title}
${badge(license)}
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
  [${answers.Title} is live!](${answers.deployed})
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
  ${answers.license}
  
  
  ## Contribute  
  ${answers.contribute}  
  ## Tests  
  ${answers.Tests}  
  
  `};
// console.log(answers.license);

// function badge(answers) {
//   let licenseIcon;
//   switch (answers.license) {
//       case "MIT":
//       licenseIcon = { name: "MIT", color: "blue"};
//       break;
//       case "Apache 2.0":
//       licenseIcon = { name: "Apache+2.0", color: "green"};
//       break;
//       case "GNU GPL 3.0":
//       licenseIcon = { name: "GNU+GPL+3.0", color: "red"};
//       break;
//   }
//   return `![License](https://img.shields.io/static/v1?label=license&message=${licenseIcon.name}&color=${licenseIcon.color})`;    

// };

function init() {
    promptUser();

};



init();