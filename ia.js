// IA

class Ia {

	constructor() {

		this.intervalGoIA;
		this.intervalChoice;
		this.secondIntervalChoice;

	}
	timerGoIa() {

		this.intervalGoIA = setInterval(() => {this.firstClick()}, 2000);
	}
	firstClick() {

		console.log("firstclickIA");

		clearInterval(this.intervalGoIA);

		this.intervalChoice = setInterval(() => {this.randomChoice()}, 4000);

	}
	alwaysPresentsCards() {

		// l'array idCards peut etre recuperé depuis card.js, on peut utiliser les id des cartes

		console.log(idCards);

	}
	randomChoice() {

		clearInterval(this.intervalChoice);

		// selectionne parmi les cartes restantes (!) une premiere carte

		console.log("ia first choice");

		this.secondClick();
	}
	secondClick() {

		console.log("secondClickIA");

		this.secondIntervalChoice = setInterval(() => {this.secondRandomChoice()}, 2000);

	}
	secondRandomChoice() {

		// selectionne parmi les cartes presentes (!) une seconde carte

		clearInterval(this.secondIntervalChoice);

		console.log("ia second choice");
	}
}

const ia = new Ia();













