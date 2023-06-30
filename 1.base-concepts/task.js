"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {} else if (discriminant === 0) {
		let result = -b / 2 * a;
		arr.push(result)
	} else {
		let result1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let result2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(result1, result2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== "number" || percent < 0 || percent > 100) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}

	if (typeof contribution !== "number" || contribution < 0) {
		return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
	}

	if (typeof amount !== "number" || amount < 0) {
		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
	}

	if (typeof countMonths !== "number" || countMonths < 0) {
		return `Параметр "Срок ипотеки" содержит неправильное значение ${countMonths}`;
	}

	let bodyCredit = amount - contribution;
	let monthlyPercent = percent / 12 / 100;
	let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
	let totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));

	return totalAmount;
}