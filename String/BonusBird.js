const changer = (string) => {
    let charArray = []
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === string[i + 1]){
            count++;
        } else {
            charArray.push(count,string[i]);
            count = 1;
        }
    }
    return charArray.join('');
}

const string =  'AAAABBC';

const result = changer(string);
console.log(result);