const fs = require('fs');

let documentOne = [];
let documentTwo = [];
let documentThree = [];
var documentFour = [];

function union(setOne, setTwo) {

    if (setOne === null || setTwo === null) {
        return void 0;
    }

    let unionSet = [];

    for (let t = 0; t < setOne.length; t++) {
        unionSet.push(setOne[t]);
    }

    for (let q = 0; q < setTwo.length; q++) {
            if (unionSet.includes(setTwo[q])) {
            } else {
                unionSet.push(setTwo[q]);
            }
    }

    return unionSet;
}

function intersection(setOne, setTwo) {

    if (setOne === null || setTwo === null) {
        return void 0;
    }

    let intersectionSet = [];

    for (let q = 0; q < setTwo.length; q++) {
            if (setOne.includes(setTwo[q])) {
                if(intersectionSet.includes(setTwo[q])) {
                } else {
                    intersectionSet.push(setTwo[q]);
                }
            }
    }
    return intersectionSet;
}

function js(x, y) {
    return x/y;
}

function frequency(word, document) {
    let count = 0;
    for (let i = 0; i < document.length; i++) {
        if (document.includes(word)) {
            count = count + 1;
        }
    }
    return count;
}

function documentFrequency (word) {
    let wordCount = 0;
    let allWordsCount = 0;

    let allDocuments = [documentOne, documentTwo, documentThree, documentFour];

    for (let i = 0; i < allDocuments.length; i++) {
        let doc = allDocuments[i];
        allWordsCount = allWordsCount + 1;
        if (doc.includes(word)) {
            wordCount = wordCount + 1;
        }
    }

    Math.log2 = Math.log2 || function(x){
        return (Math.log(x) * Math.LOG2E);
    };

    return Math.log2(allWordsCount/wordCount);
}

function weight(word, document) {
    let tf = frequency(word, document);
    let idf = documentFrequency(word);
    return tf * idf;
}

function cosineSimilarity(document, query) {

    let numerator = 0;

    let wtd = 0;
    let wtq = 0;

    for (let i = 0; i < document.length; i++) {
        let word = document[i];
        if (query.includes(word)) {
            numerator = numerator + (weight(word, document) * weight(word, query));
        }
    }

    for (let i = 0; i < document.length; i++) {
        let word = document[i];
        wtd = wtd + (weight(word, document) * weight(word, document));
    }

    for (let i = 0; i < document.length; i++) {
        let word = document[i];
        wtq = wtq + (weight(word, query) * weight(word, query));
    }

    return numerator/(Math.sqrt(wtd * wtq));
}


fs.readFile('d1.txt', function (err, text) { // Read from file
    if (err) return console.error(err); // Throw error if any
    documentOne = text.toString().toLowerCase().match(/\b(\w+)\b/g); // Convert read data to lower case and store in document variable
});

fs.readFile('d2.txt', function (err, text) { // Read from file
    if (err) return console.error(err); // Throw error if any
    documentTwo = text.toString().toLowerCase().match(/\b(\w+)\b/g); // Convert read data to lower case and store in document variable
});

fs.readFile('d3.txt', function (err, text) { // Read from file
    if (err) return console.error(err); // Throw error if any
    documentThree = text.toString().toLowerCase().match(/\b(\w+)\b/g); // Convert read data to lower case and store in document variable
});

fs.readFile('d4.txt', function (err, text) { // Read from file
    if (err) return console.error(err); // Throw error if any
    documentFour = text.toString().toLowerCase().match(/\b(\w+)\b/g); // Convert read data to lower case and store in document variable

    answers();
});

function answers() {
    var unionSetCount, intersectionSetCount;

    console.log("Document 1: " + documentOne);
    console.log("Document 2: " + documentTwo);
    console.log("Document 3: " + documentThree);
    console.log("Document 4: " + documentFour);

    console.log("\n Jaccard similarity of Document 1 and 2 \n");
    unionSetCount = union(documentOne, documentTwo).length;
    intersectionSetCount = intersection(documentOne, documentTwo).length;

    console.log ("Union Set: " + union(documentOne, documentTwo));
    console.log ("Intersection Set: " + intersection(documentOne, documentTwo));
    console.log ("Jaccard Similarity between document 1 and 2 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Jaccard similarity of Document 1 and 3 \n");
    unionSetCount = union(documentOne, documentThree).length;
    intersectionSetCount = intersection(documentOne, documentThree).length;

    console.log ("Union Set: " + union(documentOne, documentThree));
    console.log ("Intersection Set: " + intersection(documentOne, documentThree));
    console.log ("Jaccard Similarity between document 1 and 3 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Jaccard similarity of Document 1 and 4 \n");
    unionSetCount = union(documentOne, documentFour).length;
    intersectionSetCount = intersection(documentOne, documentFour).length;

    console.log ("Union Set: " + union(documentOne, documentFour));
    console.log ("Intersection Set: " + intersection(documentOne, documentFour));
    console.log ("Jaccard Similarity between document 1 and 4 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Jaccard similarity of Document 2 and 3 \n");
    unionSetCount = union(documentTwo, documentThree).length;
    intersectionSetCount = intersection(documentOne, documentThree).length;

    console.log ("Union Set: " + union(documentTwo, documentThree));
    console.log ("Intersection Set: " + intersection(documentOne, documentThree));
    console.log ("Jaccard Similarity between document 2 and 3 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Jaccard similarity of Document 2 and 4 \n");
    unionSetCount = union(documentTwo, documentFour).length;
    intersectionSetCount = intersection(documentOne, documentFour).length;

    console.log ("Union Set: " + union(documentTwo, documentFour));
    console.log ("Intersection Set: " + intersection(documentOne, documentFour));
    console.log ("Jaccard Similarity between document 2 and 4 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Jaccard similarity of Document 3 and 4 \n");
    unionSetCount = union(documentThree, documentFour).length;
    intersectionSetCount = intersection(documentThree, documentFour).length;

    console.log ("Union Set: " + union(documentThree, documentFour));
    console.log ("Intersection Set: " + intersection(documentThree, documentFour));
    console.log ("Jaccard Similarity between document 3 and 4 is " + js(intersectionSetCount, unionSetCount));

    console.log("\n Cosine Simalrity of Document 1 and 2 \n");
    console.log(cosineSimilarity(documentOne, documentTwo));

    console.log("\n Cosine Simalrity of Document 1 and 3 \n");
    console.log(cosineSimilarity(documentOne, documentThree));

    console.log("\n Cosine Simalrity of Document 1 and 4 \n");
    console.log(cosineSimilarity(documentOne, documentFour));

    console.log("\n Cosine Simalrity of Document 2 and 3 \n");
    console.log(cosineSimilarity(documentTwo, documentThree));

    console.log("\n Cosine Simalrity of Document 2 and 4 \n");
    console.log(cosineSimilarity(documentTwo, documentFour));

    console.log("\n Cosine Simalrity of Document 3 and 4 \n");
    console.log(cosineSimilarity(documentThree, documentFour));

}



