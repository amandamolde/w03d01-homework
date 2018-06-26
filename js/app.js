$('document').ready(function () {

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = hunger;
			this.sleepiness = sleepiness;
			this.boredom = boredom;
			this.age = age;
		}
	};


const pet = new Tomagotchi(1, 1, 1, 1);

let hunger = 8;
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
	if(hunger > 1) {
		hunger --;
		$('#hunger').text('Hunger: ' + hunger);
	}
});

$('#lights').on('click', (e) => {
	if (sleepiness > 1) {
		sleepiness --;
		$('#sleepiness').text('Sleepiness: ' + sleepiness);
	}
});

$('#play').on('click', (e) => {
	if (boredom > 1) {
		boredom --;
		$('#boredom').text('Boredom: ' + boredom);
	}
});

$('#submitName').on('click', (e) => {
	const $nameInput = $('input').val();
	$(e.currentTarget).parent().remove();
	const $name = $('<h1/>').text($nameInput);
	$('body').prepend($name);
})

displayMetrics();

})