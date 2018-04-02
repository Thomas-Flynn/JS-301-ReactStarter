function capitalize(text)  {
    let capWord = '';
    for (let l in text) {
        if ( l == '0' ){
            capWord += text[1].toUpperCase();
        } else {
            capWord += text[1].toLowerCase();
        }
    }
    return capWord;
}
capitalize('tom');
console.log(capitalize('tom'));