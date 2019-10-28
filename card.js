// class Card 

const backs = ["url('img/back.jpg')"];

const fronts = ["url('img/1.png')", "url('img/2.jpg')", "url('img/3.jpg')", "url('img/4.jpg')", "url('img/5.jpg')"];

const temp = [];

let counter = 2;

let temp1;

let temp2;

// let turn;

class Card {

	constructor(idCard) {

		this.idCard = idCard;
		this.newCard;
		this.back; // back image
		this.front; // front image
		this.interval;
		//this.temp1 = "1";
		//this.temp2 = "2";
		this.board = document.getElementById("board");
		this.alert = document.getElementById("alert");
	}
	init() {

		// console.log("créa de la card " + this.idCardArray);
		console.log("init");
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
		this.click();
	}
	setShowMeCards() {

		// apparition des cartes pdt 3 sec
		this.interval = setInterval(() => {this.back()}, 3000);
	}
	click() {
		
		this.newCard.addEventListener("click", () => {
			console.log(counter);
			temp.push(this.newCard);
			console.log(temp);
			if (counter === 1) {
				this.fronts();
				console.log("click 2: " + this.idCard);
				temp2 = this.newCard.style.backgroundImage;	
				console.log(temp2);
				//counter = 0;	
				if (temp1 != temp2) {
					console.log("non");
					counter = 0;
					this.alert.style.opacity = 1;
					console.log("no tries anymore");
					this.alert.innerHTML = "fail... C'est au tour de l'IA";
					/*
					Lancement de l'IA 
					*/
		   		} else {
		   			temp.push(this.newCard);
		   			console.log(temp);
		   			counter = 0;
		   			this.alert.style.opacity = 1;
		   			this.alert.innerHTML = "Good Job !";
		   			console.log("good job !");
		   			temp[0].style.display = "none";
		   			temp[1].style.display = "none";
		   			temp.pop();
		   			temp.pop();
		   			temp.pop();
		   			console.log(temp);
		   			this.click();	
		   		}
			}
			if (counter === 2) {
				this.fronts();
				console.log("click 1: " + this.idCard);
				temp1 = this.newCard.style.backgroundImage;
				console.log(temp1);
				counter = 1;
				//console.log(counter);
			}					
		})	
	}
}

// NB: Il faudrait refacto click() en appelant memory.js ...

























