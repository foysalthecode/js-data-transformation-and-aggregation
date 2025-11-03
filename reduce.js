//Count subtotal

const cartItem = [
  {
    id: "1",
    name: "Laptop",
    price: 1200,
    quantity: 5,
  },
  {
    id: "2",
    name: "Headphones",
    price: 150,
    quantity: 20,
  },
  {
    id: "3",
    name: "Mouse",
    price: 40,
    quantity: 15,
  },
];

const subtotal = cartItem.reduce((subtotal, product) => {
  //   console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);

// console.log(subtotal);

//Find best scorer

const players = [
  {
    name: "Jamal Bhuyan",
    score: 87,
  },
  {
    name: "Topu Barman",
    score: 78,
  },
  {
    name: "Sohel Rana",
    score: 74,
  },
  {
    name: "Biplo Ahmed",
    score: 69,
  },
  {
    name: "Matin Miah",
    score: 82,
  },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
}, players[0]);

// console.log(bestScorer);

//* generate a lookup table

//? input
const postsArray = [
  {
    id: "1",
    title: "The Art of Coding",
    author: "Ahmed Foysal",
  },
  {
    id: "2",
    title: "Journey Through JavaScript",
    author: "Tanvir Hasan",
  },
  {
    id: "3",
    title: "Mastering React",
    author: "Farhana Rahman",
  },
  {
    id: "4",
    title: "Node.js in Action",
    author: "Naimul Karim",
  },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

// console.log(lookupTable);
//! const post = postsArray.find((post) => post.id === "4");  //worst

const posts = lookupTable["2"];

for (let post in lookupTable) {
  console.log(lookupTable[post]);
}

// console.log(posts);
