const generatedList = [];

const stringBuilder = (str, char, position) => {
  str = str.substr(0, position) + char + str.substr(position);
  return str;
};

const combinate = (string = "abcd", i = 0) => {
  while (i + 1 < string.length) {
    i++;

    let newString = stringBuilder(string, ".", i);

    generatedList.push(newString);

    combinate(newString, i + 1);
  }

  return generatedList;
};

console.log(combinate("abcd"));
