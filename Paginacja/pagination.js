const paginateArray = (dataEntries, settings) => {
    //Check if data type is correct
    if(checkVariables(dataEntries, settings))
        return console.log("Error, incorrect data type");
    const entriesOnSelectedPage = [];
    //Check if actualPageIdx is out of bounds
    if((settings.actualPageIdx < 1) || (settings.actualPageIdx > Math.ceil(dataEntries.length / settings.entriesOnPage)))
        return console.log("Error, requested page index is out of bounds");
    
    const startEntry = (settings.actualPageIdx-1) * settings.entriesOnPage; 
    let i = 0;
    while ((i < dataEntries.length-startEntry) && (i < settings.entriesOnPage)) {
        entriesOnSelectedPage.push(dataEntries[startEntry+i]);
        i++;
    }
    return entriesOnSelectedPage;
}

const checkVariables = (dataEntries, settings) => {
    if(Array.isArray(dataEntries) && (Number.isInteger(settings.actualPageIdx)) && (Number.isInteger(settings.entriesOnPage))) 
        return false
    return true
}

//Test ground
const dataEntries = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'r', 's', 't', 'nop'];
// dataEntries.length = 4012;
// dataEntries.fill(Math.floor(Math.random()*100));
const settings = {
    'actualPageIdx': 9,
    'entriesOnPage': 500
}

paginateArray(dataEntries, settings);
//console.log(checkVariables(dataEntries, settings));
// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony
// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowimordnią ilością elementów z danej strony

