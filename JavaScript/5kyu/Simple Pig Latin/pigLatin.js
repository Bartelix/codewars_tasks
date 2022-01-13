function pigIt(str) {
  return str
    .split(' ')
    .map(word => ('.,!?'.includes(word) ? word : word.slice(1) + word[0] + 'ay'))
    .join(' ');
}

module.exports = pigIt;
