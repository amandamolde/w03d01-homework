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
	});

	const increaseAge = () => {
		setInterval(function () {
			age ++;
			$('#age').text('Age: ' + age);
		}, 120000);
	};


	const increaseHunger = () => {
		setInterval(function () {
			hunger ++;
			$('#hunger').text('Hunger: ' + hunger);
		}, 20000);
	};

	const increaseSleepiness = () => {
		setInterval(function () {
			sleepiness ++;
			$('#sleepiness').text('Sleepiness: ' + sleepiness);
		}, 60000);
	};

	const increaseBoredom = () => {
		setInterval(function () {
			boredom ++;
			$('#boredom').text('Boredom: ' + boredom);
		}, 15000);
	};


	displayMetrics();
	increaseAge();
	increaseHunger();
	increaseSleepiness();
	increaseBoredom();

})