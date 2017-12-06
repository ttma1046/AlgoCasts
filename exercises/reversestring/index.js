// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//    return str.split('').reverse().join('');

    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;

/*
    let reversed = str.split('');    
    let end = str.length - 1;
    let start = 0;

    while(start < end) {
        let temp = reversed[start];
        reversed[start] = reversed[end];
        reversed[end] = temp;

        start++;
        end--;
    }
    return reversed.join('');
*/

    return str.split('').reduce((rev, char) => char + rev, '');
}

function swap(a, b) {
    let temp = b;
    b = a;
    a = temp;
    return [a, b];
}

module.exports = reverse;