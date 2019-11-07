// class Card 

const backs = ["url('img/back.jpg')"];

const fronts = ["url('img/1.png')", "url('img/2.jpg')", "url('img/3.jpg')", "url('img/4.jpg')", "url('img/5.jpg')"];

const temp = [];

let temp1;

let temp2;

let turn;

let tryOne = true;

let tryTwo = false;

class Card {

	constructor(idCard) {

		this.idCard = idCard;
		this.newCard;
		this.back; // back image
		this.front; // front image
		this.interval;
		this.intervalAlert;
		this.intervalHideAllCards;
		//this.temp1 = "1";
		//this.temp2 = "2";
		this.board = document.getElementById("board");
		this.alert = document.getElementById("alert");
	}
	init() {

		// console.log("créa de la card " + this.idCardArray);
		console.log("init");
		console.log(this.idCard);
		this.newCard = document.createElement("div");
		this.board.appendChild(this.newCard);
		this.styleCard();	
	}
	styleCard() { 

		console.log("style card");
		this.newCard.style.height = "222px";
		this.newCard.style.width = "222px";
		this.newCard.style.margin = "auto";
		this.newCard.style.border = "green solid 1px";
	}
	fronts() {

		if (this.idCard <= 2) {
			this.newCard.style.backgroundImage = fronts[0];
		}
		if (this.idCard > 2 && this.idCard  <= 4) {
			this.newCard.style.backgroundImage = fronts[1];
		}
		if (this.idCard > 4 && this.idCard <= 6) {
			this.newCard.style.backgroundImage = fronts[2];
		}
		if (this.idCard > 6 && this.idCard <= 8) {
			this.newCard.style.backgroundImage = fronts[3];
		}
		if (this.idCard > 8 && this.idCard <= 10) {
			this.newCard.style.backgroundImage = fronts[4];
		}
	}
	back() {
		
		clearInterval(this.interval);
		this.newCard.style.backgroundImage = backs[0];
		this.spyClicks();
	}
	setShowMeCards() {

		// apparition des cartes pdt 3 sec
		this.interval = setInterval(() => {this.back()}, 3000);
	}
	spyClicks() {

		this.newCard.addEventListener("click", () => {

			if (tryOne === true && tryTwo === false) { 
				this.firstClick();
			} else if (tryOne === false && tryTwo === true) { 
				this.secondClick();
			}
		})
	}
	pushCards() {

		console.log("click");
		temp.push(this.newCard);
		console.log(temp);
	}
	firstClick() { 
		
		this.pushCards();
		this.fronts();
		console.log("click 1: " + this.idCard);
		temp1 = this.newCard.style.backgroundImage;
		console.log(temp1);
		tryOne = false;
		tryTwo = true;
		//this.spyClicks();
			
	}
	secondClick() {

		this.pushCards();
		this.fronts();
		console.log("click 2: " + this.idCard);
		temp2 = this.newCard.style.backgroundImage;	
		console.log(temp2);
			
		if (temp1 != temp2) {
			console.log("non");
			this.timerAlert();
			this.alert.style.opacity = 1;
			console.log("no tries anymore");
			this.alert.innerHTML = "fail... C'est au tour de l'IA";
			this.timerHideAllCards();
			//Lancement de l'IA au bout de 2 secondes
			ia.firstClick();
					
		}
		if (temp1 === temp2) {
		   	console.log(temp);
		   	this.timerAlert();
		   	this.alert.style.opacity = 1;
		   	this.alert.innerHTML = "Good Job !";
		   	console.log("good job !");
		   	temp[0].style.opacity = "0";
		   	temp[1].style.opacity = "0";
		   	temp.pop();
		   	temp.pop();
		   	console.log(temp);
		   	temp1 = "";
		   	temp2 = "";
		   	tryOne = true;
		   	tryTwo = false;
			//this.spyClicks();
	   	}
	}
	opacityAlert() {

		this.alert.style.opacity = 0;
		clearInterval(this.intervalAlert);
	}
	timerAlert() {

		this.intervalAlert = setInterval(() => {this.opacityAlert()}, 2000);
	}
	timerHideAllCards() {

		this.intervalHideAllCards = setInterval(() => {this.hideAllCards()}, 2000);
	}
	hideAllCards() {
		
		clearInterval(this.intervalHideAllCards);
		temp[0].style.backgroundImage = backs[0];
		temp[1].style.backgroundImage = backs[0];
	}
}

// NB: Il faudrait refacto click() en appelant memory.js ...

























