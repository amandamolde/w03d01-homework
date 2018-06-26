$('document').ready(function () {

	let hunger = 1;
	let sleepiness = 1;
	let boredom = 1;
	let age = 1;
	let time = 0;

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = 1;
			this.sleepiness = 1;
			this.boredom = 1;
			this.age = 1;
		}
	};


	const pet = new Tomagotchi();



	const displayMetrics = () => {
		$('#hunger').text('Hunger: ' + hunger);
		$('#sleepiness').text('Sleepiness: ' + sleepiness);
		$('#boredom').text('Boredom: ' + boredom);
		$('#age').text('Age: ' + age);
	};

	
// //////////FEED PET//////////
	$('#feed').on('click', (e) => {
		if(hunger > 1) {
			hunger --;
			$('#hunger').text('Hunger: ' + hunger);
		}
	});


// ///////TURN OFF LIGHTS///////
	// $('#lights').on('click', (e) => {
	// 	$('img').toggleClass('lightsOff',true);
	// 	$('#lights').text('Wake Me Up');

	// 	$('#lights').off().on('click', (e) => {
	// 		$('img').toggleClass('lightsOff', false);
	// 		$('#lights').text('Turn Lights Off');
	// 	})
	// 	if (sleepiness > 1) {
	// 		sleepiness --;
	// 		$('#sleepiness').text('Sleepiness: ' + sleepiness);
	// 		// $('img').toggleClass('lightsOff',true);
	// 		// $('#lights').text('Wake Me Up');
	// 		// NEED TO TOGGLE CLASS HERE SO COLOR TURNS OFF
	// 	}
	// });

	$('#lights').on('click', (e) => {
		$('img').detach();
		const darkRoom = $('<div class="darkRoom"></div>');
		$('section').append(darkRoom);

		if (sleepiness > 1) {
			setInterval(function () {
				sleepiness --;
				$('#sleepiness').text('Sleepiness: ' + sleepiness);
			}, 5*1000);
		}
	});


// ///////PLAY WITH PET///////
	$('#play').on('click', (e) => {
		if (boredom > 1) {
			boredom --;
			$('#boredom').text('Boredom: ' + boredom);
		}
	});


// //////////NAME PET//////////
	$('#submitName').on('click', (e) => {
		const $nameInput = $('input').val();
		$(e.currentTarget).parent().remove();
		const $name = $('<h1/>').text($nameInput);
		$('body').prepend($name);
		displayMetrics();
		startTimers();
	});

	// Increase time every one second
	const timePassing = () => {
		setInterval(function () {
			time ++;
			$('#time').text('Time: ' + time + ' s');
		}, 1*1000);
	};

// Age increases every 30 seconds
	const increaseAge = () => {
		setInterval(function () {
			age ++;
			$('#age').text('Age: ' + age);
		}, 30*1000);
	};

// Hunger increases every 5 seconds
	const increaseHunger = () => {
		setInterval(function () {
			hunger ++;
			$('#hunger').text('Hunger: ' + hunger);
		}, 5*1000);
	};

// Sleepiness increases every 10 seconds
	const increaseSleepiness = () => {
		setInterval(function () {
			sleepiness ++;
			$('#sleepiness').text('Sleepiness: ' + sleepiness);
		}, 10*1000);
	};

// Boredome increases every 15 seconds
	const increaseBoredom = () => {
		setInterval(function () {
			boredom ++;
			$('#boredom').text('Boredom: ' + boredom);
		}, 15*1000);
	};


	const startTimers = () => {
		timePassing();
		increaseAge();
		increaseHunger();
		increaseSleepiness();
		increaseBoredom();
	};

	// const petDies = () => {
	// 	if (hunger === 10) {
	// 		alert('Your pet has died');
	// 	}
	// };

	// petDies();

})