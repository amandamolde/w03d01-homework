$('document').ready(function () {
	// console.log('working');

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = hunger;
			this.sleepiness = sleepiness;
			this.boredom = boredom;
			this.age = age;
		}
	};

	// console.log(Tomagotchi);

const pet = new Tomagotchi(1, 1, 1, 1);
// console.log(pet, ' this is my Tomagotchi');

let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let age = 1;

const displayMetrics = () => {
	$('#hunger').text('Hunger: ' + hunger);
	$('#sleepiness').text('Sleepiness: ' + sleepiness);
	$('#boredom').text('Boredom: ' + boredom);
	$('#age').text('Age: ' + age);
};

displayMetrics();

})