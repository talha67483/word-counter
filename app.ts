#! /usr/bin/env node 
import inquirer  from "inquirer";


const answer  = await inquirer.prompt([
    {name:"option",
        type:"list",
        message:"Enter one option ",
        choices:["You want to count Letters","You want to count Words"]
    }])

if(answer.option === "You want to count Letters"){
    let Letters = await inquirer.prompt([{
        name:"letter",
            type:"input",
            message:"Enter your word to count the Letter"

        
    }])

    let count = Letters.letter.trim().split("")
    console.log(count);
    console.log(`Your words count is = ${count.length}`);
    
    
    
}

else if(answer.option === "You want to count Words" ){
    let Sentence = await inquirer.prompt([
        {
            name:"sentence",
                type:"input",
                message:"Enter your sentence to count the word "
        }
    ])


    let Word = Sentence.sentence.trim().split(" ")
console.log(Word);


console.log(`Your sentence word count is = ${Word.length}`);


}


