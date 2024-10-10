//npm i chalk 
//npm i inquirer
//node index.js

const chalk = require('chalk');

// const nota = 10;

// if (nota >= 7) {
//   console.log(chalk.green('Aprovado'));
// } else {
//   console.log(chalk.red('Reprovado'))
// }

const inquirer = require('inquirer')

inquirer
    .prompt([
      { name: 'nome', message: 'Qual o seu nome?' },
      { name: 'idade', message: 'Qual a sua idade?' },
    ])

    .then((answers) => {
        const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade}`
        console.log(chalk.bgYellow.black(response))
    })

    .catch((err) => {
    console.log(err)
  })