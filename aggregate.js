//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//todo initiate a empty obj
//todo check if the elements already exsists or not
//todo if it exixst then increment the count
//todo if not then initialize with 1

const count = surveyResponses.reduce((table, element) => {
  // if (table[element]) {
  //   table[element] = table[element] + 1;
  // } else {
  //   table[element] = 1;
  // }
  table[element] = (table[element] || 0) + 1;
  return table;
}, {});

console.log(count);

//? output
// { A: 5, C: 2, B: 3, D: 1 }
