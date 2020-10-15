const PangramFinder = function (phrase) {
	this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
	this.phrase = phrase.toLowerCase();
};

PangramFinder.prototype.isPangram = function () {
	const lowerPhrase = this.phrase.split('');
	const check = this.alphabet.map((letter) => {
		return lowerPhrase.includes(letter);
	});
	if (check.includes(false) === true) {
		return false;
	} else {
		return true;
	}
};

// one line solution
// return this.alphabet.every((letter) => this.phrase.includes(letter));

module.exports = PangramFinder;
