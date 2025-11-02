// const obj = {
//   nextLevel: { courseId: "level 2" },
//   "programming hero": { courseId: "level 1" },
// };
// console.log(obj["programming hero"].courseId);

const course1 = { name: "programmin hero" };
const course2 = { name: "Next level web development" };

const map = new Map();

// map.set(1, "programming hero");
// map.set(false, "programming hero"); //if this is also a boolean then it will remain an object
map.set(course1, { courseId: "level 1" }); //we can set another object as a key
map.set(course2, { courseId: "level 2" }); //we can set another object as a key

// map.clear(); // for clearing everything
// console.log(map.size); //map.size counts how many element are there in the map

// map.delete(course1) // this delete method uses for delete a particular object using key

// console.log(map.has(course1)); // this has method checks that is this element exist or not ..if exist it will return a boolean
// map.forEach((value,key) =>{console.log('key:',key,'value:',value);}) // for iteration there is only foreach method works

// map.forEach((value, key) => (key.name = "sohoz sorol simple" + key.name));

// console.log(map.keys()); //reture a iterator
// console.log([...map.keys()]); //return an array (we can spread a iterator)
// console.log([...map.values()]); //return an array (we can spread a iterator)

// for (let key of map.keys()) {
//   key.name = "sohoz sorol simple" + key.name;
// }
console.log(map.entries());