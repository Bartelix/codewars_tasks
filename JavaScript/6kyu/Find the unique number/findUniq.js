function findUniq(arr) {
  return arr
    .reduce((result, item) => {
      const tmp = result.find(el => el[0] === item);
      if (tmp) tmp[1]++;
      else result.push([item, 1]);
      return result;
    }, [])
    .find(el => el[1] === 1)[0];
}

module.exports = findUniq;
