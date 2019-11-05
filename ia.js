// IA

class Ia {

	constructor() {

	}
	firstClick() {

		console.log("firstclickIA");
		this.secondClick();
	}
	secondClick() {

		console.log("secondClickIA");

	}
}

const ia = new Ia();