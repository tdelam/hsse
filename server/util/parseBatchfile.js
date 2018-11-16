const fs = require('fs');
const path = require('path');

/*
fs.readFile('HSEBatchfileSamples\\hse_reviews_plus_2017-09-05.txt', 'utf8', (err, data) => {
    
    if (err) {
        console.log(err);
    }
    
    // data.split('\n').map(row => row.split('\t'));
    const lines = data.split('\n');
    console.log(`Length of articles is: ${lines.length}`);
    const fields = lines[28].split('\t');
    console.log(`Amount of fields are: ${fields.length}`);
    console.log(lines);
    
    //console.log(lines[20].split('\t'));
});
*/

const journalFields = [
    "referenceType",
    "rating",
    "title", //author
    "authors", // year
    "year",  // title
    "journal",
    "volume",
    "issue",
    "pages",
    "startPage",
    "ePubDate",
    "date",
    "typeOfArticle",
    "shortTitle",
    "alternateJournal",
    "ISSN",
    "DOI",
    "originalPublication",
    "rePrintEdition",
    "reviewedItem",
    "legalNote",
    "PMCID",
    "NIHMSID",
    "articleNumber",
    "accessionNumber",
    "callNumber",
    "label",
    "abstract", // keywords
    "keywords", // abstract
    "notes",
    "researchNotes",
    "URL",
    "fileAttachments",
    "authorAddress",
    "figure",
    "caption",
    "accessDate",
    "translatedAuthor",
    "translatedTitle",
    "nameOfDatabase",
    "databaseProvider",
    "language"
];


exports.parseHSEJournalFile = (data) => {
/*
    fs.readFile(file, 'utf8', (err, data) => {

        if (err) {
            console.log(err);
        }
*/
        const emptyObj = [];

        // Split batchfile into lines (each line contain an article)
        const articles = data.split('\n');

        // Last Array is always empty (removing here)
        const trimmedArticles = articles.slice(0, articles.length - 1);

        const finalResult = trimmedArticles.map(line => {
            fields = line.split('\t');
            return Object.assign.apply({}, journalFields.map( (v, i) => ( {[v]: fields[i]} ) ) );
            //return { ...emptyObj, journalFields.map( (v, i) => ( {[v]: fields[i]} ) ) }
        });
        console.log(`!!!!!!!!!!!!!!!!!!!! Lenghth of array: ${finalResult.length} !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
        return finalResult;

    /*
        console.log(finalResult);
        const jsonFinalResult = JSON.stringify(finalResult);

        fs.writeFile('articlesArray.txt', jsonFinalResult, function(err, data){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    */
/*
    });
 */
}

parseJournalArray = (articleArray) => {
    
    const fieldsArray = articleArray.split('\t');

}

exports.parseHSEBook = (data) => {

}

exports.parseHSEBookSection = (data) => {

}





