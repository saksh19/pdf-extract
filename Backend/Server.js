
const test = require("./openai")
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 4001;
// import pdfParse from 'pdf-parse';
const pdfParse = require('pdf-parse');
const { lowSurrogate } = require("pdf-lib");

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // const fileName = req.body.fileName;
  // const fileType = req.body.fileType;
  // const filequery = req.body.filequery;
  const fileBuffer = req.file.buffer;

  // Handle the file data
  // console.log('Received file:', {
  //   fileName: fileName,
  //   fileType: fileType,
  //   fileBuffer: req.file.buffer,
  //   filequery : filequery
  // });
  
  let finalData = await fileprocess(fileBuffer);
  // console.log(finalData)
  let ans = await test(finalData.text)
  console.log(
    "this is ans", ans
  )
  console.log("ans[0]", ans[1])
  console.log(check);
  if(ans.includes("{")){
  console.log("Answer from openAI", typeof(ans))
  const answer = JSON.parse(ans)
  console.log("Answer hamara", typeof(answer))
  res.send(answer);
  }
  else{
   let index=ans.indexOf("N")

console.log("working");
  }
  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

async function fileprocess(fileBuffer){
    try {
        // const dataBuffer = fs.readFileSync(pdf.path);
        const pdfData = await pdfParse(fileBuffer);
        // console.log("pdfData",pdfData);
        return pdfData;
        // const textChunks = chunkText(pdfData.text);
        // console.log(textChunks , "text chunks");
      } catch (err) {
        console.log(err);
        return;
      }
}

function chunkText(text, chunkSize = 500) {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
  }