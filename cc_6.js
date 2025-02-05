// Task 1 - Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit  = (sellingPrice - costPrice) * unitsSold

    return `Total Profit: $${profit}`;
};

console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"