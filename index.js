const cowsay = require("cowsay");
const { myInfo } = require('./information');
const chalk = require('chalk');

console.log(
    cowsay.say({
        text: chalk.yellow(`Hey! I am ${myInfo.name} and I am from ${myInfo.campus} campus!`)
    })
)
