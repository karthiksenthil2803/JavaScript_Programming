// Your code here.
let deepEqual = (obj1, obj2) => {
	if(obj1 === obj2)
      return true;
  	
  if(obj1 == null ||typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object')
    return false;
  
  let keysObj1 = Object.keys(obj1), keysObj2 = Object.keys(obj2);
  
  if(keysObj1.length != keysObj2.length)
    return false;
  for(let key of keysObj1)
  {
    if( !keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
      return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true