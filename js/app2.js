$('document').ready(function () {

	let seconds = 0;
	let lightToggle = false;
	$('.darkRoom').hide();
	$('.deadPet').hide();
	$('.playAgain').hide();

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
	const $name = $('<h1 id="name"></h1>').text($nameInput);
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
			console.log('Pet has died');
			clearInterval(timePasses);
			let deadMessage = $('<h1/>').text("Your Tomagotchi has died").css('color', 'red')
			$(deadMessage).appendTo('section');
			$('.buttons').hide();
			$('.playAgain').show();
		}

		if (pet.age < 4) {
			$('.livePet').attr('src', 'images/baby.png');
		} else if (pet.age < 8) {
			$('.livePet').attr('src', 'images/toddler.png');
		} else if (pet.age < 12) {
			$('.livePet').attr('src', 'images/teen.png');
		} else if (pet.age < 16) {
			$('.livePet').attr('src', 'images/adult.png')
		}
	};

const timePasses = setInterval(timePassing, 1000);	

});

// /////////////////PLAY AGAIN/////////////////
	$('#reset').on('click', (e) => {
		location.reload();
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

// ///////////////PLAY WITH PET///////////////
	$('#play').on('click', (e) => {
		if (pet.boredom > 1) {
			pet.boredom --;
			$('#boredom').text('Boredom: ' + pet.boredom);
		}
	});










})

