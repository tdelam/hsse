const fs = require('fs');
const path = require('path');

/*
module.exports = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'data', filename), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data.split('\n').map(row => row.split('\t')));
    });
  });

*/

/*
var readMe = fs.readFileSync('hse_cochrane_reviews_2018-10_2018-11.txt', 'utf8');
fs.readFileSync('writeMe.txt', readMe);


fs.readFile('hse_cochrane_reviews_2018-10_2018-11.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

*/

fs.readFile('HSEBatchfileSamples\\hse_reviews_plus_2017-09-05.txt', 'utf8', (err, data) => {
    
    if (err) {
        console.log(err);
    }
/*

*** Fields from Journal batch ***

referenceType
rating
author
year
title
journal
volume
issue
pages
startPage
ePubDate
date
typeOfArticle
shortTitle
alternateJournal
ISSN
DOI
originalPublication
rePrintEdition
reviewedItem
legalNote
PMCID
NIHMSID
articleNumber
accessionNumber
callNumber
label
keywords
abstract
notes
researchNotes
URL
fileAttachments
authorAddress
figure
caption
accessDate
translatedAuthor
translatedTitle
nameOfDatabase
databaseProvider
language
*/

/*

*** For reference type ‘Book:’

1.       Reference type

2.       Rating

3.       Author

4.       Year

5.       Title

6.       Series editor

7.       Series title

8.       Place published

9.       Publisher

10.   Volume

11.   Number of volumes

12.   Series volume

13.   Number of pages

14.   Pages

15.   Editor

16.   Edition

17.   Date

18.   Type of work

19.   Translator

20.   Short title

21.   Abbreviation

22.   ISBN

23.   DOI

24.   Original publication

25.   Reprint edition

26.   Title prefix

27.   Reviewer

28.   Accession number

29.   Call number

30.   Label

31.   Keywords

32.   Abstract

33.   Notes

34.   Research notes

35.   URL

36.   File attachments

37.   Author address

38.   Figure

39.   Caption

40.   Access date

41.   Translated author

42.   Translated title

43.   Name of database

44.   Database provider

45.   Language

*/
 

/*

*** For reference type ‘Book section:’

1.       Reference type

2.       Rating

3.       Author

4.       Year

5.       Title

6.       Editor

7.       Book title

8.       Place published

9.       Publisher

10.   Volume

11.   Number of volumes

12.   Series volume

13.   Pages

14.   Chapter

15.   Series editor

16.   Series title

17.   Edition

18.   Translator

19.   Short title

20.   Abbreviation

21.   ISBN

22.   DOI

23.   Original publication

24.   Reprint edition

25.   Reviewed item

26.   Section

27.   Title prefix

28.   Reviewer

29.   Packaging method

30.   Accession number

31.   Call number

32.   Label

33.   Keywords

34.   Abstract

35.   Notes

36.   Research notes

37.   URL

38.   File attachments

39.   Author address

40.   Figure

41.   Caption

42.   Access date

43.   Translated author

44.   Translated title

45.   Name of database

46.   Database provider

47.   Language

*/



    // data.split('\n').map(row => row.split('\t'));
    const lines = data.split('\n');
    console.log(`Length of articles is: ${lines.length}`);
    const fields = lines[28].split('\t');
    console.log(`Amount of fields are: ${fields.length}`);
    console.log(lines);
    //console.log(lines[20].split('\t'));

});