// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    if (n <= 0) return;

    for (var i = 1; i <= n; i++) {
        console.log(idiot(i));
    }
}

function idiot(n) {
    if (n % 3 === 0) 
    {
        if (n % 5 === 0) {
            return 'fizzbuzz';
        }

        return 'fizz';
    }

    if (n % 5 === 0) {
        return 'buzz';
    }

    return n;
}

/*

for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? (b ? "FizzBuzz" : "Fizz") : (b ? "Buzz" : i));
}

for(var i = 1;i <= 100; i++, msg = ""){
    if (!(i % 3)) msg += "Fizz"; 
    if (!(i % 5)) msg += "Buzz"; 
    console.log(msg || i); 
}

for(i=0;i<100;) {
    console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}
*/

module.exports = fizzBuzz;
