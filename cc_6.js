// Task 1 - Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit  = (sellingPrice - costPrice) * unitsSold

    return `Total Profit: $${profit}`;
};

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

// Task 2 - Sales Tax Computation
function calculateSalesTax(amount, taxRate) {
    const salesTax = amount * taxRate

    return `Sales Tax: ${salesTax}`
}

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

// Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
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


