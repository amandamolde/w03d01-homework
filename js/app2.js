$('document').ready(function () {

	let seconds = 0;
	let lightToggle = false;
	$('.darkRoom').hide();
	$('.deadPet').hide();

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = 1;
			this.sleepiness = 1;
			this.boredom = 1;
			this.age = 1;
		}
	};


	const pet = new Tomagotchi(1, 1, 1, 1);


// //////////TIMER AND INCREASE METRICS//////////
$('#submitName').on('click', (e) => {

	const $nameInput = $('input').val();
	$(e.currentTarget).parent().remove();
	const $name = $('<h1/>').text($nameInput);
	$('body').prepend($name);

	const timePassing = () => {
		$('#time').text('Time: ' + seconds + ' s');
		console.log(`It has been ${seconds} seconds`);
		seconds ++;

		if (seconds % 5 == 0) {
			pet.hunger ++;
			$('#hunger').text('Hunger: ' + pet.hunger);
			console.log(`Pet hunger increased at ${seconds}`);
		}

		if (seconds % 15 == 0) {
			pet.sleepiness ++;
			$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
			console.log(`Pet sleepiness increased at ${seconds}`);
		}

		if (seconds % 10 == 0) {
			pet.boredom ++;
			$('#boredom').text('Boredom: ' + pet.boredom);
			console.log(`Pet boredom increased at ${seconds}`);
		}

		if (seconds % 30 == 0) {
			pet.age ++;
			$('#age').text('Age: ' + pet.age);
			console.log(`Pet age increased at ${seconds}`);
		}

		if (pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10) {
			$('.deadPet').show();
			$('.livePet').hide();
			console.log('Pet has died')
			clearInterval(timePasses);
		}
	}

const timePasses = setInterval(timePassing, 1000);	

});


// //////////////////FEED PET//////////////////
	$('#feed').on('click', (e) => {
		if(pet.hunger > 1) {
			pet.hunger --;
			$('#hunger').text('Hunger: ' + pet.hunger);
		}
	});


// //////////////TURN OFF LIGHTS//////////////
	$('#lights').on('click', (e) => {
		if (lightToggle === false) {
			$('.livePet').hide();
			$('#feed').hide();
			$('#play').hide();
			$('.darkRoom').show();
			$('#lights').text("Wake Me Up");

			if (pet.sleepiness > 1) {
				pet.sleepiness --;
				$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
			}
	

			lightToggle = true;

		} else {
			$('.livePet').show();
			$('#feed').show();
			$('#play').show();
			$('#lights').text("Turn Lights Off");
			$('.darkRoom').hide();
			lightToggle = false;
		}
	});

// const decreaseSleepiness = () => {
// 	if (pet.sleepiness > 1) {
// 		setInterval(function () {
// 			pet.sleepiness --;
// 			$('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
// 		}, 5*1000);
// 	}
// };


// ///////////////PLAY WITH PET///////////////
	$('#play').on('click', (e) => {
		if (pet.boredom > 1) {
			pet.boredom --;
			$('#boredom').text('Boredom: ' + pet.boredom);
		}
	});










})

