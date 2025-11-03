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
  console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);

console.log(subtotal);

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
