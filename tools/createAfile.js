const fs = require('fs');
const path = require('path');

const createAFile = (fileName, fileData) => {
  const filePath = path.join(__dirname, '../root', fileName);
  fs.writeFileSync(filePath, fileData, 'utf8');
};

module.exports = createAFile;
