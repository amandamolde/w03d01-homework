$('document').ready(function () {

	let hunger = 9;
	let sleepiness = 4;
	let boredom = 9;
	let age = 6;

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
		// darkRoom.appendTo('#image');
		$('section').append(darkRoom);


		// $('<div></div>').addClass('.darkRoom).appendTo('#image');
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


	const startTimers = () => {
		increaseAge();
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