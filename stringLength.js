const stringLength = (string) => {  
  if (string.length === 0 || string.length > 10) {
    throw new Error(
      'The string should be at least 1 character long and not more than 10',
    );
  } else
  return string.length;
}

module.exports = stringLength;