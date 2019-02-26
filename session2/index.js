// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  let wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

  const sorted = wordArr.sort((a, b) => {
      return b.length - a.length
  })

  const longestWordArr = sorted.filter(word => {
      return word.length === sorted[0].length
  })

  if (longestWordArr.length === 1) {
      return longestWordArr[0]
  } else {
      return longestWordArr
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // Option 1
    // const chunkedArr = []
    // let i = 0
    // while (i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i + len))
    //
    //     i += len
    // }
    // return chunkedArr

    // Option 2
    const chunkedArr = []

    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    })

    return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // Option 1
    // return arrays.reduce((a, b) => {
    //     return a.concat(b)
    // })

    // Option 2
    // return [].concat.apply([], arrays)

    // Option 3
    // return [].concat(...arrays)
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
    return str.replace(/[^\w]/g, '')
              .toLowerCase()
              .split('')
              .sort()
              .join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = isAnagram('elbow', 'below');

console.log(output);
