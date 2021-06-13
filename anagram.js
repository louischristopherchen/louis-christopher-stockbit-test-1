const data = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const anagram = [];

function handleAnagram(value) {
  let objAlphabet = {};

  // pakai method buble SORT
  function sortAlpahbet(alphabet) {
    var cekProcess = false
    while (!cekProcess) {
      cekProcess = true;
      for (var i = 0, j = 1; i < alphabet.length && j < alphabet.length + 1; i++, j++) {
        if (alphabet[i] > alphabet[j]) {
          cekProcess = false;
          var tmp = alphabet[i];
          alphabet[i] = alphabet[j];
          alphabet[j] = tmp;
        }
      }
    }
    return alphabet
  }


  // proses pengelompokkan dengan mencari kata yg sdh di sort huruf nya
  for (var text of value) {
    const albphabetSplit = text.split('');
    const alphabetSort = sortAlpahbet(albphabetSplit).join('');
    if (!objAlphabet[alphabetSort]) {
      objAlphabet[alphabetSort] = [text]
    } else {
      objAlphabet[alphabetSort].push(text)
    }
  }

  console.table(objAlphabet)
  for (var i in objAlphabet) {
    anagram.push(objAlphabet[i])
  }

}
handleAnagram(data)
console.log(anagram)

