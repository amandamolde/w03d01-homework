$('document').ready(function () {

	let time = 0;
	let lightToggle = false;
	$('.darkRoom').hide();

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = 1;
			this.sleepiness = 1;
			this.boredom = 1;
			this.age = 1;
		}
	};


	const pet = new Tomagotchi(1, 1, 1, 1);


	const 



	const displayMetrics = () => {
		$('#hunger').text('Hunger: ' + pet.hunger);
		$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
		$('#boredom').text('Boredom: ' + pet.boredom);
		$('#age').text('Age: ' + pet.age);
	};

	
// //////////FEED PET//////////
	$('#feed').on('click', (e) => {
		if(pet.hunger > 1) {
			pet.hunger --;
			$('#hunger').text('Hunger: ' + pet.hunger);
		}
	});


// ///////TURN OFF LIGHTS///////
	$('#lights').on('click', (e) => {
		if (lightToggle === false) {
			$('img').hide();
			$('#feed').hide();
			$('#play').hide();
			$('.darkRoom').show();
			$('#lights').text("Wake Me Up")

			decreaseSleepiness();

			lightToggle = true;

		} else {
			$('img').show();
			$('#feed').show();
			$('#play').show();
			$('#lights').text("Turn Lights Off");
			$('.darkRoom').hide();
			lightToggle = false;
		}
	});

const decreaseSleepiness = () => {
	if (pet.sleepiness > 1) {
		setInterval(function () {
			pet.sleepiness --;
			$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
		}, 5*1000);
	}
};


// ///////PLAY WITH PET///////
	$('#play').on('click', (e) => {
		if (pet.boredom > 1) {
			pet.boredom --;
			$('#boredom').text('Boredom: ' + pet.boredom);
		}
	});


// //////////NAME PET//////////
	$('#submitName').on('click', (e) => {
		const $nameInput = $('input').val();
		$(e.currentTarget).parent().remove();
		const $name = $('<h1/>').text($nameInput);
		$('body').prepend($name);
		displayMetrics();
		startGame();
	});

	// Increase time every one second
	const timePassing = () => {
		const gameTimer = setInterval(function () {
			time ++;
			$('#time').text('Time: ' + time + ' s');
		}, 1*1000);
	};

// Age increases every 30 seconds
	const increaseAge = () => {
		const ageTimer = setInterval(function () {
			pet.age ++;
			$('#age').text('Age: ' + pet.age);
		}, 30*1000);
	};

// Hunger increases every 5 seconds
	const increaseHunger = () => {
		const hungerTimer = setInterval(function () {
			pet.hunger ++;
			if(pet.hunger = 10) {
				clearInterval(hungerTimer);
			}
			checkIfPetDies(hungerTimer);
			$('#hunger').text('Hunger: ' + pet.hunger);
		}, 1*1000);
	};

// Sleepiness increases every 10 seconds
	const increaseSleepiness = () => {
		const sleepinessTimer = setInterval(function () {
			pet.sleepiness ++;
			checkIfPetDies();
			$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
		}, 10*1000);
	};

// Boredome increases every 15 seconds
	const increaseBoredom = () => {
		const boredomTimer = setInterval(function () {
			pet.boredom ++;
			checkIfPetDies();
			$('#boredom').text('Boredom: ' + pet.boredom);
		}, 5*1000);
	};


	const startGame = () => {
		timePassing();
		increaseAge();
		increaseHunger();
		increaseSleepiness();
		increaseBoredom();
	};

	const stopTimers =() => {
		clearInterval(gameTimer);
		clearInterval(ageTimer);
		clearInterval(hungerTimer);
		clearInterval(sleepinessTimer);
		clearInterval(boredomTimer);
	};

	const checkIfPetDies = (timerName) => {
		if (pet.hunger === 10 || pet.sleepiness === 10 || pet.boredom === 10) {
			console.log('Your pet has died');
			clearInterval(time)
		}
	};

})