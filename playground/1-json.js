const fs = require('fs');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.title);
// fs.writeFileSync('1-json.json', bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer)
const dataJson = JSON.parse(dataBuffer.toString());
dataJson.name = "Muqaddas";
dataJson.age = 25

fs.writeFileSync('1-json.json', JSON.stringify(dataJson));
