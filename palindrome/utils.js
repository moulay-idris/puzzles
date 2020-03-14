const isPalindrome = x => {
  const input = x + '';
  const str = input.split("").reverse().join("");

  let isNot = true;
  for (let i=0; i < str.split("").length/2; i++) {
    if (str[i]!==input[i]) {
      isNot = false;
      break;
    }
  }

  return isNot;
};
