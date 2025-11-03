//sort ---------------------------------------------

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// const sortedNumber = numbers.sort((a, b) => a - b);
// console.log(sortedNumber);

// fruits.sort((a, b) => a.localeCompare(b)); //sort according alphabetic order
// console.log(fruits);

//nested array flat -----------------------------------------------

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["javascript", "html", "css"],
];

// const filterdTags = [...new Set(tagsFromPosts.flat())];
// console.log(filterdTags);

//some -----------------------------------------------
// const numberss = [1, 2, 3, 4, 5, 6, 7];

// const hasOddNumber = numberss.some((number) => number % 2 === 0);
// console.log(hasOddNumber);

// const currentUserRoles = ["user", "editor"];
// const featureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role)
// );

// console.log(canAccess);

//Array.from() ---------------------
// const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 11, 1));
