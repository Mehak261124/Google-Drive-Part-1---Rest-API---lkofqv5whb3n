const fs = require('fs');
const path = require('path');

const updateAFile = (oldFileName, updatedFileName, newFileData) => {
  const oldFilePath = path.join(__dirname, '../root', oldFileName);
  const newFilePath = path.join(__dirname, '../root', updatedFileName);

  if (fs.existsSync(oldFilePath)) {
    fs.renameSync(oldFilePath, newFilePath);
    fs.writeFileSync(newFilePath, newFileData, 'utf8');
  } else {
    throw new Error('File does not exist');
  }
};

module.exports = updateAFile;