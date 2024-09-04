const express = require('express');
const createAFile = require('./tools/createAfile');
const deleteAFile = require('./tools/deleteAFile');
const getAFile = require('./tools/getAFile');
const getAllFileNames = require('./tools/getAllFileName');
const updateAFile = require('./tools/updateAfile');
const app = express();

app.use(express.json());

app.get('/file', (req, res) => {
  try {
    const files = getAllFileNames();
    res.json({ files });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/file/getAfile', (req, res) => {
  try {
    const content = getAFile(req.params.fileName);
    res.json({ fileContent: content });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.post('/file/createAfile', (req, res) => {
  const { fileName, fileData } = req.body;
  try {
    createAFile(fileName, fileData);
    res.json({ message: 'File created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/file/updtatedAfile', (req, res) => {
  const { updatedFileName, newFileData } = req.body;
  try {
    updateAFile(req.params.fileName, updatedFileName, newFileData);
    res.json({ message: 'File updated successfully' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.delete('/file/deleteAfile', (req, res) => {
  try {
    deleteAFile(req.params.fileName);
    res.json({ message: 'File deleted successfully' });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;