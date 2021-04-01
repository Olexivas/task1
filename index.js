const generatedList = [];

const stringBuilder = (str, position) => {
  str = `${str.substr(0, position)}.${str.substr(position)}`;
  return str;
};

const combinate = (string, index = 0) => {
  if (!generatedList.length) {
    generatedList.push(string);
  }

  while (index + 1 < string.length) {
    index++;

    let tempStr = stringBuilder(string, index);

    generatedList.push(tempStr);

    combinate(tempStr, index + 1);
  }

  return generatedList;
};

console.log(combinate("abcde"));