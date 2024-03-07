function invertText(input) {
    let charArray = input.split('');
    let inputReverse = "" ;
    for (let i = charArray.length - 1; i >= 0; i--) {
        inputReverse += charArray[i];
    }
    
    return inputReverse
}

let input = "amor"
console.log("A Palavra invertida: " + invertText(input))
