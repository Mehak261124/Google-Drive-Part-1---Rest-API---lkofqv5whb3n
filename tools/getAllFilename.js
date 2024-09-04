const fs = require('fs');
const path = require('path');

const getAllFileNames = () => {
  const directoryPath = path.join(__dirname, '../root');
  return fs.readdirSync(directoryPath);
};

module.exports = getAllFileNames;
