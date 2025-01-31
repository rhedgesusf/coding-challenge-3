//////////////////////////////////////
// Task 1: Product Price Management //
//////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 1: Product Price Management');

let prices = [5.01, 7.87, 7.24, 1.99, 11.12];
console.log("Initial Prices", prices);

prices.push(28.94);
console.log("Added Price", prices);

// Shift removes first in array
prices.shift();
console.log("Final Prices", prices);

///////////////////////////////////////
// Task 2: Modifying Customer Orders //
///////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 2: Modifying Customer Orders');

let orders = [51, 84, 11, 95, 107];
console.log("Initial Orders", orders);

// Increase third quantity by 5
orders[2] += 5;
console.log("Added 5 to third order", orders);

// Calculate Sum
let ordersTotal = orders.reduce((sum, quantity) => sum + quantity, 0);
console.log("Total order quantity", ordersTotal);

///////////////////////////////////////////
// Task 3: Employee Performance Tracking //
///////////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 3: Employee Performance Tracking');

let employee = {
    name: "Riley Hedges",
    role: "Intern",
    performanceScore: 81,
    isActive: true
};
console.log("Initial Employee Info", employee);

employee.performanceScore = 85;
console.log("Updated Employee Performance Score", employee);

employee.promotionEligible = false;
console.log("Added Promotion Eligibility", employee);

///////////////////////////////////////
// Task 4: Customer Feedback Records //
///////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 4: Customer Feedback Records');

let feedback = [{
    customerName: "Bill Billy",
    feedbackText: "Better luck next time!",
    rating: 1
},{
    customerName: "Jon Jones",
    feedbackText: "Amazing Job!",
    rating: 10
},{
    customerName: "John Cena",
    feedbackText: "Excellent Work!",
    rating: 9
}];
console.log("Initial Feedback", feedback);
console.log("Initial Feedback", JSON.stringify(feedback));


feedback.push({
    customerName: "Mike Miller",
    feedbackText: "You'll get it next time!",
    rating: 0
});
console.log("Added feedback", JSON.stringify(feedback)); // JSON.stringify converts javascript to a JSON string

/////////////////////////////////////////
// Task 5: Inventory Management System //
/////////////////////////////////////////

console.log('--------------------------------------');
console.log('Task 5: Inventory Management System');

let inventory = {
    itemName: "Water Bottle",
    stockCount: 550,
    price: 1.99,
    calculateTotalValue: function(){
        return this.stockCount * this.price;
    }
};

console.log("Initial inventory", inventory);
console.log("Total Value", inventory.calculateTotalValue());