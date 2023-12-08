/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	let resultObj = {};
	for (let transaction of transactions) {
		let category = transaction.category;
		let price = transaction.price;

		if (!(category in resultObj)) {
			resultObj[category] = price;
		} else {
			resultObj[category] += price;
		}
	}

	let resultArr = [];

	for (let currentCategory in resultObj) {
		let tempObj = {
			category: currentCategory,
			totalSpent: resultObj[currentCategory],
		};

		resultArr.push(tempObj);
	}

	return resultArr;
}

module.exports = calculateTotalSpentByCategory;
