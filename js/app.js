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

let hunger = 6;
let sleepiness = 4;
let boredom = 10;
let age = 6;

const displayMetrics = () => {
	$('#hunger').text('Hunger: ' + hunger);
	$('#sleepiness').text('Sleepiness: ' + sleepiness);
	$('#boredom').text('Boredom: ' + boredom);
	$('#age').text('Age: ' + age);
};

$('#feed').on('click', (e) => {
	// console.log('feed clicked')
	if(hunger > 1) {
		hunger --;
		// console.log(hunger);
	}
});

$('#lights').on('click', (e) => {
	// console.log('lights clicked')
	if (sleepiness > 1) {
		sleepiness --;
		// console.log(sleepiness);
	}
});

$('#play').on('click', (e) => {
	// console.log('play clicked')
	if (boredom > 1) {
		boredom --;
		// console.log(boredom);
	}
});

displayMetrics();

})