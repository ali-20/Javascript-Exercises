
//JavaScript Exercise 2
//Muhammad ali
//Dated Oct 2,2022
/* 
Program Description:
Printing a person's name in UpperCase,LowerCase and titleCase.
*titleCase method is custom made.
*/

let personName="ali";

const toTitleCase=(sentence)=>{
    
    let wordsArray=sentence.split(" ");
    let wordsArrayWithEachWordCapitalized=[];
    for(let i=0; i<wordsArray.length; i++){
        const CapitalizedWord= wordsArray[i][0].toUpperCase()+wordsArray[i].substring(1);
        wordsArrayWithEachWordCapitalized.push(CapitalizedWord);
    }
    return wordsArrayWithEachWordCapitalized.join(" ");
}

console.log("Person's Name in UpperCase:",personName.toUpperCase());
console.log("Person's Name in LowerCase:",personName.toLowerCase());
console.log("Person's Name in TitleCase:",toTitleCase(personName));