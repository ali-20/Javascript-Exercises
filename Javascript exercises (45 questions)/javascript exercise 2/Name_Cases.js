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




