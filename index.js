// add solution here
function theBeatlesPlay(people, instrum) {
  const arr = [];
  for (let i = 0; i < people.length; i++) {
    arr.push(`${people[i]} plays the ${instrum[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i < arr.length) {
    arr[i++] += "!!!";
  }
  return arr;
}