Array.prototype.toString = function () {
  function ArrayStringify(obj) {
    const isArray = value => Array.isArray(value) && typeof value === 'object';
    const isString = value => typeof value === 'string';
    const isBoolean = value => typeof value === 'boolean';
    const isNumber = value => typeof value === 'number';

    const restOfDataTypes = value => isNumber(value) || isString(value) || isBoolean(value);

    if (restOfDataTypes(obj)) {
      const passQuotes = isString(obj) ? `'` : '';
      return `${passQuotes}${obj}${passQuotes}`;
    }

    const removeComma = str => {
      const tempArr = str.split('');
      tempArr.pop();
      return tempArr.join('');
    };

    if (isArray(obj)) {
      let arrStr = '';
      obj.forEach(value => {
        arrStr += ArrayStringify(value);
        arrStr += ',';
      });

      return '[' + removeComma(arrStr) + ']';
    }
  }

  return ArrayStringify(this);

  // return JSON.stringify(this).replace(/"/g, "'");
};
