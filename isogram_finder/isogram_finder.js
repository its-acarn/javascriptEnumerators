const IsogramFinder = function (word) {
	this.word = word.toLowerCase();
};

IsogramFinder.prototype.isIsogram = function () {
	let letters = this.word.split('');
	let check = true;

	for (let i = 0; i < letters.length; i++) {
		let letter = letters[i];
		let count = 0;

		for (let j = 0; j < letters.length; j++) {
			let letter2 = letters[j];

			if (letter === letter2) {
				count = count + 1;

				if (count > 1) {
					check = false;
				}
			}
		}
	}
	return check;
};

// class solution:
// IsogramFinder.prototype.isIsogram = function () {
// return this.word.split('').every(letter => this.isUnique(letter));
// };
// IsogramFinder.prototype.isUnique = function (letter) {
// return this.word.indexof(letter) === this.word.lastIndexOf(letter);
// };

const isogramFinder = new IsogramFinder('repeated');
isogramFinder.isIsogram();

module.exports = IsogramFinder;
