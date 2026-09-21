const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) {
  console.log("Please provide a file name.");
} else {
  try {
    const content = fs.readFileSync(fileName, 'utf8');
    const previewContent = content.split('\n').slice(0,15).join('\n');
    console.log(previewContent);
  } catch (error) {
    console.log('Error: Could not read the file, Please check the name.');
  }
}
