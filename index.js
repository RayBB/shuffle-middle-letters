function shuffleArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

function shuffleMiddle(str) {
    let curWord = str.match(/\w*/)[0];
    const firstLetter = curWord.slice(0, 1)
    const lastLetter = curWord.slice(-1)
    let middle = curWord.slice(1, -1).split("")
    shuffleArr(middle)
    const newWord = firstLetter + middle.join("") + lastLetter;
    // doing this replace because I don't want to get rid of punctuation when possible.
    return str.replace(curWord, newWord);
}


window.addEventListener('load', function(){
    const inputElement = document.querySelector("#inText")
    const outputElement = document.querySelector("#outText")
    inputElement.addEventListener('input', function () {
        const splitInput = inputElement.value.split(" ");
        outputElement.value = splitInput.map(shuffleMiddle).join(" ")
    });
})

