const stringLength = (string) => {
  if(string.length > 0 && string.length <= 10) {
    return string.length;
  }
  return 'Error, length exceeded.';
}

module.exports = stringLength;