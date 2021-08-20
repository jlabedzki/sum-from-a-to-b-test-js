




const sum = (fromN, toN) => {
  if (fromN < toN) {
    return sum(fromN + 1, toN) + (fromN);
  }

  return toN;
};

console.log(sum(3, 7));

module.exports = sum;
