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
	turn() {

		// Chaque tour équivault à 2 cartes dévoilées
	}
	counterClick() {

		console.log(card.counter);
		
	}
	firstClick() {

		// A chaque tour : une premiere carte est dévoilée,
		// juste check au click du num de la carte :
		
	}
	rotate() {

		//rotation de la carte clickée
	}
	secondClick() {

		// une seconde carte est dévoilée
	}
	checkMatch() {

		// check match

	}
	fail() {

		// si le match est mauvais
	}
	win() {

		// si le match est bon

		// memory.findTwin();
	}
	findTwin() {

		// yes !
	}
	numberOfFindedTwin() {

		// comptabliliser les couples trouvés, si moitié dépassée >>>
	}
	totalFail() {

		// plus de la moitié des couples ont fail

		// "vous avez perdu";
	}
	totalWin() {

		// laissez tourner pour un possible perfect...

		// En tout cas, après toutes possiblités épuisées si plus de la moitié des couples ont été trouvés

		// "YOU WON !";
	}
}

const memory = new Memory();

memory.setDifficulty();

//memory.setShowMeCards();




















