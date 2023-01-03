// || Total number of months
var totalMonths = finances.length;

// || Total Profit and Losses
var netProfit = 0;
var profit = 0;

for (var mainIndex = 0; mainIndex < finances.length; mainIndex++) {
  profit = finances[mainIndex][1];
  netProfit += profit;
}

// || Average Change in Profit and Losses
// Creates new array, differences between months + values
function diff(finances) {
  var differenceArray = [];
  for (var i = 1; i < finances.length; i++)
    differenceArray.push([finances[i][0], finances[i][1] - finances[i - 1][1]]);
  return differenceArray;
}

// Finds total in array
var total = 0;
for (var i = 0; i < diff(finances).length; i++) {
  total += diff(finances)[i][1];
}

// Finds average change
var averageChange = total / (totalMonths - 1);

// || Greatest Increase in Profits
// Creates new array, differences between values only, months not included
function diffNum(finances) {
  var differenceArray = [];
  for (var i = 1; i < finances.length; i++)
    differenceArray.push(finances[i][1] - finances[i - 1][1]);
  return differenceArray;
}

// Finds index  of greatest increase value
var indexIncrease = diffNum(finances).indexOf(Math.max(...diffNum(finances)));
var greatestIncrease = diff(finances)[indexIncrease];

// || Greatest Decrease in Profits
// Finds index  of greatest decrease value
var indexDecrease = diffNum(finances).indexOf(Math.min(...diffNum(finances)));
var greatestDecrease = diff(finances)[indexDecrease];

// || Financial Analysis Console Display
console.log(
  `Financial Analysis
------------------------------
Total Months: ${totalMonths}
Total: $${netProfit}
Average Change: $${averageChange.toFixed(2)}
Greatest Increase in Profits: ${greatestIncrease[0]} ($${greatestIncrease[1]})
Greatest Decrease in Profits: ${greatestDecrease[0]} ($${greatestDecrease[1]})
`
);
