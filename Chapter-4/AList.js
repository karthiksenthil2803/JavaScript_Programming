// Your code here.
let arrayToList = (num) => {
    let list = null;
    for(let i = num.length-1; i>=0; i--)
    {
      list = {value : num[i], rest: list}
    }
    return list;
  }
  
  let listToArray = (list) => {
    let arr = [];
    for(let node = list; node != null; node = node.rest)
    {
      arr.push(node.value);
    }
    return arr;
  }
  
  let prepend = (num, list) => {
    if(list == null)
      return {value : num, rest : null};
    for(let node = list; node != null; node = node.rest) 
    {
      list = {value : num, rest: list};
    }
    return list;
  }
  
  let nth = (list, num) => {
      let count = 0;
    for(let node = list, i = 0; node != null; node = node.rest, i++)
    {
      if(i == num)
        return node.value;
    }
    return undefined;
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20