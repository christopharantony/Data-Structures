const encoder = (string, key) => {
    const newKey = key%26;
    const charArray = []
    let letterPosition;
    for (let i = 0; i < string.length; i++) {
        letterPosition = string.charCodeAt(i) + newKey;
        charArray.push(String.fromCharCode(letterPosition));
    }
    return charArray.join("");
}

const string = "hai"

const coded = encoder(string, 2)
console.log(coded);

//?  Time complexity = O(2n)
//?  Space complexity = O(n)