const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions: ',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Usage Information: ',
        name: 'information',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines: ',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Test Instructions: ',
        name: 'test',
    },
    {
      type: 'list',
      message: 'License: ',
      name: 'license',
      choices: ['MIT','ISC','Permissive','PDDL','Perl'],
    },
    {
      type: 'input',
      message: 'GitHub Username: ',
      name: 'GitHub'
    },
    {
      type: 'input',
      message: 'Email Address: ',
      name: 'email',
    },
  ])  .then((answers) => {
        console.log(answers)
        var markdown =
         `# ${answers.title}
  ![Github licence](http://img.shields.io/badge/license-${answers.license}-blue.svg)

  ### ${answers.description}

  ## Table of Contents
  1. [Installation Instructions](#installation-instructions)
  2. [Usage Information](#usage-information)
  3. [Contribution Guidelines](#contribution-guidelines)
  4. [Test Instructions](#test-instructions)


  # Installation Instructions:
  > ${answers.instructions}


  # Usage Information
  ### ${answers.information}


  # Contribution Guidelines
  ### ${answers.guidelines}


  # Test Instructions
  ### ${answers.test}


  ### **GitHub**
  ${answers.GitHub}

  ### **Email**
  ${answers.email}`

  fs.writeFile('newREADME.md', markdown, function (err){
      if(err){
      console.log(err)}
        })
  }).catch((error) => {
    if (error) {
        console.log(error)
    }
  });