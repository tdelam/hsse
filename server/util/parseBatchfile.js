const fs = require('fs');
const path = require('path');

fs.readFile('HSEBatchfileSamples\\hse_reviews_plus_2017-09-05.txt', 'utf8', (err, data) => {
    
    if (err) {
        console.log(err);
    }

    // data.split('\n').map(row => row.split('\t'));
    const lines = data.split('\n');
    console.log(`Length of articles is: ${lines.length}`);
    const fields = lines[28].split('\t');
    console.log(`Amount of fields are: ${fields.length}`);
    console.log(lines[20].split('\t'));

});

exports.parseHSEJournal = (file) => {

    fs.readFile(file, 'utf8', (err, data) => {

        const articlesArray = file.split('\n');

    })

    

    console.log(`Length of articles is: ${lines.length}`);
    const fields = lines[28].split('\t');
    console.log(`Amount of fields are: ${fields.length}`);
    console.log(lines[20].split('\t'));



  
}

exports.parseHSEBook = (data) => {

}

exports.parseHSEBookSection = (data) => {

}