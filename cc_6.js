// Task 1 - Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    // Calculates the profit
    const profit  = (sellingPrice - costPrice) * unitsSold

    return `Total Profit: $${profit}`;
};

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

// Task 2 - Sales Tax Computation
function calculateSalesTax(amount, taxRate) {
    // Calculates the sales tax
    const salesTax = amount * taxRate

    return `Sales Tax: ${salesTax}`
}

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

// Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    // Sets up percentage bonuses
    const bonusPercent = {
        Excellent: 0.2,
        Good: 0.1,
        Average: 0.05
    };
    const bonus = salary * bonusPercent[performanceRating];
    return `Bonus: $${bonus.toFixed(2)}`;
}
console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
console.log(calculateBonus(7000, "Good"));      // Expected output: "Bonus: $700"

// Task 4 - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    // Sets up subscription pricing
    const subscription = {
        Basic: 10,
        Premium: 20,
        Enterprise: 50
    };
    // Calculates the cost of the subscription
    const cost = months * subscription[plan] - discount;
    return `Total Cost: $${cost};`
};
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240")

// Task 5 - Currency Conversion
function convertCurrency(amount, exchangeRate) {
    //Calculates amount and exchange rate
    const rate = amount * exchangeRate
    return `Exchanged Amount: $${rate.toFixed(2)}`;
};

console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00"
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"

// Task 6 - Discount Strategy for Bulk Orders
let orders = [200, 600, 1200, 450, 800];
// High-order function to apply discount
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
};
// Tests the function 
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discountedOrders);// Expected output: [200, 540, 1080, 450, 720]

// Task 7 - Business Expense Tracker
function createExpenseTracker() {
    // Initial amount
    let total = 0;
    return function (amount) {
        total += amount;
        return `Total Expenses: $${total}`;
    }
}
// declares empty tracker amount
let tracker = createExpenseTracker();

console.log(tracker(200));  // Expected output: "Total Expenses: $200"
console.log(tracker(150));  // Expected output: "Total Expenses: $350"


// Task 8 -Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    // If employeeLevel is 10 or greater, employee will not need to know how many years left to for a promotion
    if (employeeLevel >= 10) {
        return 0;
    }
    // If employeeLevel is less than 10, will give years needed to promote based on current level
    return 2 + calculateYearsToPromotion(employeeLevel + 1);
};

console.log("Years to Level 10:", calculateYearsToPromotion(7));
console.log("Years to Level 10:", calculateYearsToPromotion(5));
