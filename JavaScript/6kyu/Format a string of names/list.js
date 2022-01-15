module.exports = function list(names) {
  return names.reduce((result, name, index) => {
    return result + (index === 0 ? '' : index === names.length - 1 ? ' & ' : ', ') + name.name;
  }, '');
};
