function stringChop(str, size) {
   // If input string is null or empty, return empty array
  if (!str) return [];

  const result = [];
  // Convert size to number (as prompt returns string)
  size = Number(size);

  // Loop through the string in steps of 'size'
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
