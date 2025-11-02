//this is input
const rawApiData = [
  {
    id: "1",
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    rating: 4.5,
    stock: 120,
  },
  {
    id: "2",
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.7,
    stock: 80,
  },
  {
    id: "3",
    productName: "Running Shoes",
    category: "Sportswear",
    price: 75.5,
    rating: 4.3,
    stock: 45,
  },
  {
    id: "4",
    productName: "Coffee Maker",
    category: "Home Appliances",
    price: 49.99,
    rating: 4.2,
    stock: 60,
  },
  {
    id: "5",
    productName: "Desk Lamp",
    category: "Home Decor",
    price: 19.99,
    rating: 4.0,
    stock: 200,
  },
  {
    id: "6",
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 89.0,
    rating: 4.8,
    stock: 35,
  },
  {
    id: "7",
    productName: "Water Bottle",
    category: "Sports",
    price: 12.49,
    rating: 4.4,
    stock: 150,
  },
  {
    id: "8",
    productName: "Office Chair",
    category: "Furniture",
    price: 139.99,
    rating: 4.6,
    stock: 25,
  },
  {
    id: "9",
    productName: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "10",
    productName: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    rating: 4.1,
    stock: 100,
  },
  {
    id: "11",
    productName: "Electric Kettle",
    category: "Home Appliances",
    price: 34.99,
    rating: 4.3,
    stock: 75,
  },
  {
    id: "12",
    productName: "Portable Charger",
    category: "Electronics",
    price: 45.0,
    rating: 4.6,
    stock: 90,
  },
];

//?output =>[{name: 'gaming keyboard'},{name: 'smart watch'}] -------example

//process --------------->
//todo filter ==> electronics
//todo sort by rating
//todo slice ==> first 3 (top 3)
//todo ==> transform object shape to {name : "Name"}

const topElectronicData = rawApiData
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) =>{
    return {name: item.productName}
  });

console.log(topElectronicData);