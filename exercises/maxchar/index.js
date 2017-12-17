// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common String Questions
//   What is the most common character in the string ?
//   Does string A have the same characters as string B (is it an anagram)?
//   Does the given string have any repeated characters in it ?

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    /*
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
    */

    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    // console.log(charMap);

    // charMap[char] = charMap[char] + 1 || 1;
  }

    
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  for (let prop in charMapOne) {
    if(charMapTwo[prop] !== charMapOne[prop]) {
      return false;
    }
  }

  return true;

  return maxChar;
  
}

module.exports = maxChar;
