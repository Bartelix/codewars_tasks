function findOutlier(integers) {
  let evenCnt = 0;

  integers.slice(0, 3).forEach(integer => {
    if (integer % 2 === 0) evenCnt++;
  });

  if (evenCnt >= 2) return integers.find(integer => integer % 2 !== 0);
  return integers.find(integer => integer % 2 === 0);
}

module.exports = findOutlier;
