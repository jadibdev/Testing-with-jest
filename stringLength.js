const stringLength = (str) => {
    if (str.length >= 1 && str.length <= 10) {
      return str.length;
    } else {
      throw 'string char length is out of range'
    }
};

module.exports = stringLength