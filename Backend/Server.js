import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  // req.file is the name of your file in the form, here 'file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body);
  res.send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
