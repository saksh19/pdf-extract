const { OpenAI } = require('@langchain/openai');
const { config } = require('dotenv');
const { PromptTemplate } = require('@langchain/core/prompts');
const fs = require('fs');
const pdf = require('pdf-parse');


config();
const API_URL_PROMPT_TEMPLATE1 = `You have been provided with the data and the question based on the data find the answer of that question
here is your data {api_docs} and here is your question {question} Keep in mind to send answer in json and send the keys in the same format like question li
Below is the format of giving responses :
NAME - 
PROJECT - 
and try to send answer in JSON Format` ;


const API_URL_PROMPT_TEMPLATE = new PromptTemplate({
inputVariables: ["api_docs", "question"],
 template: API_URL_PROMPT_TEMPLATE1,
});


// async function getData() {
//  try {
//   const dataBuffer = fs.readFileSync('./test.pdf');
//   const data = await pdf(dataBuffer);
//   return data.text;
//  } catch (error) {
//   console.error('Error while reading PDF:', error);
//   throw error; // Rethrow the error for proper handling
//  }
// }


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


async function test(finalData) {
 try {
//   const finalData = await getData();
  console.log("This is final data:", finalData);

  console.log("At the test ")
  const model = new OpenAI({ temperature: 0.1, apiKey: OPENAI_API_KEY });


  const question1 = "Can you give me name , email , phone_no , project , internship , Programming_skill , Frontend_Development_skills, Backend_Development_skill , Database_Skills and Advance_Language_Processing?";


  const apiUrlPrompt = await API_URL_PROMPT_TEMPLATE.format({
      api_docs: finalData,
      question: question1,
     });
  
     const apiUrlResponse = await model.generate([apiUrlPrompt]);
    // //  console.log("API URL Response:", apiUrlResponse)
    //  console.log("This is final response",apiUrlResponse.generations[0][0].text);
  // Further processing or actions based on OpenAI responses
//   console.log(apiUrlResponse.generations[0][0].text);
  return apiUrlResponse.generations[0][0].text;


 } catch (error) {
  console.error('Error in test function:', error);
 }
}

module.exports = test