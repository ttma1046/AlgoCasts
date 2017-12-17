// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    /*
    const result = [];
    let temp = [];
    for (let j = 0; j < array.length; j++) {
        if (temp.length < size) {
            temp.push(array[j]);
        } else {
            result.push(temp);
            temp = [array[j]];
        }
    }
    result.push(temp);

    return result;
    */

    const chunked = [];
    /*
    for (let i = 0; i < array.length; i += size)
    { 
        chunked.push(array.slice(i, i + size)); 
    }
    */
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    // Create empty 'chunked' array
    // Create 'index' start at 0
    // While index is less than array.length
    //   Push a slick of length 'size' from 'array' into 'chunked'
    //   Add 'size' to 'index'

    return chunked;
    /*
    const chunked = [];

    if (!array) return;
    if (array.length === 0) reture;

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }

    return chunked;
    */
}

module.exports = chunk;

// Create empty array to hold chunks called 'chunked'
//   For each element in the *unchunked* array
//     Retrieve the last element in 'chunked'
//     If last element does not exist, or if its length is equal to chunk size
//        Push a new chunk into 'chunked' with the current element
//     Else add the current element into the chunk