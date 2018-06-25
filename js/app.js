$('document').ready(function () {
	// console.log('working');

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = 1;
			this.sleepiness = 1;
			this.boredom = 1;
			this.age = 1;
		}
	};

const pet = new Tomagotchi(1, 1, 1, 1);
console.log(pet, ' this is my Tomagotchi');


})