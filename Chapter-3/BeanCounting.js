// Your code here.
let countBs = (text) => {
    let count = 0;
    for(let i = 0; i<text.length; i++)
        if(text[i] == 'B')
        count++;
    return count;
  }
  
  let countChar = (text, match) => {
    let count = 0;
    for(let i = 0; i<text.length; i++)
        if(text[i] == match)
        count++;
    return count;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4