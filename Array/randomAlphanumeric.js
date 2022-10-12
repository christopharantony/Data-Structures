function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[parent(Math.random() * chars.length)];
    return result;
}
var rString = randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
console.log(rString)