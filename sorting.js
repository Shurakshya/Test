const words = ['BOAT', 'Locomotive', 'Poet', 'Accelerate', 'GOLF', 'ACCIDENTAL', 'Submarine'];

function asciiSort(strings) {
  /*
   * Sorts a list of strings based on the ASCII code of the third letter first,
   * then the second letter, and finally the first letter.
   */

  return strings.sort((a, b) => {
    const aAscii = [a.charCodeAt(2), a.charCodeAt(1), a.charCodeAt(0)];
    const bAscii = [b.charCodeAt(2), b.charCodeAt(1), b.charCodeAt(0)];
    for (let i = 0; i < 3; i++) {
      if (aAscii[i] !== bAscii[i]) {
        return aAscii[i] - bAscii[i];
      }
    }
    return 0;
  });
}

/*
const strings = ["abc", "cba", "bcc", "acb", "ABC", "CAB", "CBA"];
const sortedStrings = asciiSort(strings);
console.log(sortedStrings); */ 

const sortedWords = asciiSort(words);
console.log(sortedWords)