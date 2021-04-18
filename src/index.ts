/**
 Given an array of unsorted numbers and a target sum,
 find a pair in the array whose sum is equal to the given target.
 Write a function to return the indices of the two numbers such that they add up to the given target.

 Example:
 Input: [6, 4, 1, 3, 2], target=6
 Output: [1, 4] ==> input[1] + input[4] = 6
 */
const separateArray = (array, middle) => {
  return [[{ index: 2, value:1 },2], [4, 6], [3]]
};

const f = (array: number[], target: number): number[] => {

  const sortedArray = array.sort((a, b) => {
    return a > b
  });

  const pivot = target / 2;

  if (pivot > sortedArray[sortedArray.length - 1]) {
    return [];
  }


  const [array1, array2, equal] = separateArray(array, pivot);

  for (let i=0; i < array1.length; i++) {
    const element = array1[i];
    const complimentary = array2.findIndex();
    break;
  }



  let solution: number[] = [];
  for (let i=0; i < array.length; i++) {
    const element = array[i];
    for (let j=0; j < array.length; j++) {
      const item =  array[j];
      const sum = element + item;
      if (sum ===  target && i!==j) {
        solution = [i, j];
        break;
      }
    }
  }
  return solution;
};

const solution = f([6, 4, 1, 3, 2], 6);
console.log(solution)
