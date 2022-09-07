const transpose = matrix => {
  let result = [];
  const width = matrix[0].length;
  
  for (let i = 0; i < width; i++) {
    const newRow = [];
    for (const item of matrix) {
      newRow.push(item[i]);
    }
    result.push(newRow);
  }
  return result;
};


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;