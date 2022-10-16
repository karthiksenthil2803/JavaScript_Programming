// Your code here.
let reverseArray = (arr) => {
    let ans = [];
    for(let i of arr)
    {
      ans.unshift(i);
    }
    return ans;
  }
  
  let reverseArrayInPlace = (arr) => {
    let n = arr.length;
    for(let i = 0; i< n/2; i++)
    {
      let temp = arr[i];
      arr[i] = arr[n-i-1];
      arr[n-i-1] = temp;
    }
    return arr;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]