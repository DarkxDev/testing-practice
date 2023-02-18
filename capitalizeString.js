const capitalizeString = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return 'Input is not a string.'
}

module.exports = capitalizeString;