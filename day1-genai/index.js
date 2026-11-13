// import {ChatGroq} from "@langchain/groq"
// import dotenv from "dotenv"
// import rl from "readline/promises" // user se input mang na ka kaam mai araha hota hai 

// dotenv.config()

// const model = new ChatGroq({
//     model:"openai/gpt-oss-120b",
//     apiKey: process.env.GROQ_API_KEY
// })


// // const response = await model.invoke("hello, how are  you?") // send data to server

// const userInput = await readline.question("Enter your input: ")
// console.log(userInput);

// readline.close()



// import {ChatGroq} from "@langchain/groq"
// import dotenv from "dotenv"
// import rl from "readline/promises" // user se input mang na ka kaam mai araha hota hai (nmp i readline)

// dotenv.config()

// const model = new ChatGroq({
//     model:"openai/gpt-oss-120b",
//     apiKey: process.env.GROQ_API_KEY
// })

// const readline = rl.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })



// const userInput = await readline.question("Enter your input: ")
// console.log(userInput);

// readline.close()


// import {ChatGroq} from "@langchain/groq"
// import dotenv from "dotenv"
// import rl from "readline/promises" // user se input mang na ka kaam mai araha hota hai (nmp i readline)

// dotenv.config()

// const model = new ChatGroq({
//     model:"openai/gpt-oss-120b",
//     apiKey: process.env.GROQ_API_KEY
// })

// const readline = rl.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })

// while(true){
//     const userInput = await readline.question("Enter your input: ") // user input de ga
//     const response = await model.invoke(userInput) // user ka input ai ko de ga and woh process kara ga and jo bhi response ho ga de ga wapas

//     console.log(response.content); //and woh user ka response mila ga wapas 
    
// }


import {ChatGroq} from "@langchain/groq"
import dotenv from "dotenv"
import rl from "readline/promises" // user se input mang na ka kaam mai araha hota hai (nmp i readline)

dotenv.config()

const model = new ChatGroq({
    model:"openai/gpt-oss-120b",
    apiKey: process.env.GROQ_API_KEY
})

const readline = rl.createInterface({
    input:process.stdin,
    output:process.stdout,
})

while(true){
    const userInput = await readline.question("Enter your input: ") 
    const response = await model.stream([
        {
            role:"user",
            content:userInput
        }
    ]) 

    for await(const chunk of response){
        // console.log(chunk.content); //we can also use chuck.text

        process.stdout.write(chunk.content) // line by line nahi proper paragraph mai aya ga 
        
    }

    process.stdout.write("\n") // next line mai move kar deta hai vid dur:1:28:00 bug mila ga 
    
}