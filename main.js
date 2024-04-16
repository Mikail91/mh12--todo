#!/usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
while (condition) {
    let add = await inquirer.prompt([{
            message: "What do u want to add in your to-do list?",
            type: "input",
            name: "uAdd"
        },
        {
            message: "Do u want to add more in your to-do list?",
            type: "confirm",
            name: "moreAdd",
            default: "true"
        }
    ]);
    toDo.push(add.uAdd);
    console.log(toDo);
    condition = add.moreAdd;
}
