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
