const IsogramFinder = function (word) {
	this.word = word.toLowerCase();
};

IsogramFinder.prototype.isIsogram = function () {
	let letters = this.word.split('');
	let check = true;

	for (let i = 0; i < letters.length; i++) {
		let letter = letters[i];

		for (let j = 0; j < letters.length; j++) {
			let letter2 = letters[j];

			if (letter === letter2) {
				let count = 0;
				count = count + 1;

				if (count > 1) {
					check = false;
				}

				console.log(`letter: ${letter}`);
				console.log(`letter2: ${letter2}`);
				console.log(`count: ${count}`);
			}
		}
	}

	return check;
};

const isogramFinder = new IsogramFinder('repeated');
isogramFinder.isIsogram();

module.exports = IsogramFinder;
