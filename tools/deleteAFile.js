const fs = require('fs');
const path = require('path');

const deleteAFile = (fileName) => {
  const filePath = path.join(__dirname, '../root', fileName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  } else {
    throw new Error('File does not exist');
  }
};

module.exports = deleteAFile;
