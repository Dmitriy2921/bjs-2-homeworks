function compareArrays(arr1, arr2) {

	if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
		return true;
	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {
	let total = 0;
	if (users.length === 0) {
		return 0
	}
	if (gender === "мужской") {
		let total = users.filter(person => person.gender === "мужской").map(person => person.age);
		return total.reduce((acc, item) => acc + item) / total.length;
	} else if (gender === "женский") {
		total = users.filter(person => person.gender === "женский").map(person => person.age);
		return total.reduce((acc, item) => acc + item) / total.length;
	} else {
		return 0;
	}
}