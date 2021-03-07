{/**
 * Runtime: 176 ms, faster than 91.42% of JavaScript online submissions for Palindrome Number.
 * Memory Usage: 45.6 MB, less than 58.62% of JavaScript online submissions for Palindrome Number.
 */
  /**
   * @param {number} x
   * @return {boolean}
   */
  const isPalindrome = x => {
    const input = (x + '').split("");
    const str = [...input].reverse();

    let isNot = true;
    for (let i = 0; i < input.length / 2; i++) {
      if (str[i] !== input[i]) {
        isNot = false;
        break;
      }
    }
    return isNot;
  };
}
{
  /**
   * @param {number} x
   * @return {boolean}
   */
  const isPalindrome = x => x == ((x + '').split("").reverse().join(""));
}


