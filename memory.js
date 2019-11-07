// memory

const values = [];

const tests = [];

class Memory {

	constructor() {

		this.idCard;
		this.board; 	
		this.interval;
	}
	setDifficulty() {

		// pour la difficulté 10, il y aura 5 fronts
		// pour la difficulté 20, il y aura 10 fronts
		// pour la difficulté 30, il y aura 15 fronts
		for (let i = 1; i <= board.difficulty; i++) {
			values.push(i);
			console.log(values);
			console.log(values.length);
		}
		memory.distributePositionsCardsRandom();
	}
	distributePositionsCardsRandom() {

		for (let y = 1; y <= values.length; y) { 
			let numberRandom = Math.floor(Math.random() * Math.floor(values.length));
			let random = values.splice(numberRandom, 1);
			console.log(values.length);
			console.log(values);
			memory.initCard(random);
		}
	}
	initCard(random) {

		// Création des cartes, de leurs fronts et back, et écoute des click 1 et 2
		const card = new Card(random);
		card.init();
		card.fronts();
		card.setShowMeCards();
	}
}

const memory = new Memory();

memory.setDifficulty();

//memory.setShowMeCards();




















