const fs = require('fs');
const path = require('path');

const getAFile = (fileName) => {
  const filePath = path.join(__dirname, '../root', fileName);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  } else {
    throw new Error('File does not exist');
  }
};

module.exports = getAFile;