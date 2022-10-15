let grid = "";
let n = 8;

for(let i = 0; i<n; i++)
{
  if(i%2 == 0)
  {
    for(let j = 0; j<n; j++)
    {
      if(j%2 == 0)
      {
        grid += ' ';
      }
      else {
        grid += '#';
      }
    }
    grid += '\n';
  }
  else 
  {
    for(let j = 0; j<n; j++)
    {
      if(j%2 == 0)
      {
        grid += '#';
      }
      else {
        grid += ' ';
      }
    }
    grid += '\n';
  }
}

console.log(grid);