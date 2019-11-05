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

		this.intervalChoice = setInterval(() => {this.randomChoice()}, 2000);

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

		clearInterval(this.secondIntervalChoice);

		console.log("ia second choice");
	}
}

const ia = new Ia();











