//////////////////////////////////////
// Task 1: Product Price Management //
//////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 1: Product Price Management');

let prices = [5.01, 7.87, 7.24, 1.99, 11.12];
console.log("Initial Prices", prices);

prices.push(28.94);
console.log("Added Price", prices);

prices.shift();
console.log("Final Prices", prices);

///////////////////////////////////////
// Task 2: Modifying Customer Orders //
///////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 2: Modifying Customer Orders');

let orders = [51, 84, 11, 95, 107];
console.log("Initial Orders", orders);

orders[2] += 5;
console.log("Added 5 to third order", orders);

let ordersTotal = orders.reduce((sum, quantity) => sum + quantity, 0);
console.log("Total order quantity", ordersTotal);


