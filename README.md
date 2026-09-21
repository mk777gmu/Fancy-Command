# Fancy-Command

## Section 1 - Command Description

My tool combines the cat and head commands. It reads a file's content and displays only the first 15 lines, regardless of whether there are more. 

To run the command: node preview.js <filename>

Example: node preview.js firstf.js

The program uses process.argv to get the filename, reads it with fs.readFileSync, and also uses split, slice, and join, so it only displays the first 15 lines of the file, and cuts anything else if its more than 15 lines. 

## Section 2 - AI Assisted Programming

I asked AI to help me understand how cat and head can work together into a a node.js program. AI helped me breakdown concepts into my terms so I could understand the material. AI helped me for the edge cases. AI didn't catch everything, because I had some typos and syntax errors that I had to find and forgetting to switch the directory.

