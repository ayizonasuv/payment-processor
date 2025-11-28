const { parse } = require('csv-parse');

const parser = async (filePath) => {
  const results = [];

  const readableStream = await import('fs').then(fs => fs.createReadStream(filePath));
  const fileStream = readableStream.pipe(parse({ delimiter: ',' }));

  fileStream.on('data', (data) => {
    try {
      results.push(data);
    } catch (error) {
      console.error('Error parsing file:', error);
    }
  });

  await new Promise((resolve, reject) => {
    fileStream.on('end', () => resolve());
    fileStream.on('error', (error) => reject(error));
  });

  return results;
};

module.exports = parser;