$('document').ready(function () {

	let seconds = 0;
	let lightToggle = false;
	$('.darkRoom').hide();
	$('.deadPet').hide();
	$('.playAgain').hide();
	let success = 2;
	let info = 5;
	let warning = 7;
	let danger = 10;

	class Tomagotchi {
		constructor(hunger, sleepiness, boredom, age){
			this.hunger = 1;
			this.sleepiness = 1;
			this.boredom = 1;
			this.age = 1;
		}
	};


	const pet = new Tomagotchi();


// //////////TIMER AND INCREASE METRICS//////////
$('form').on('submit', (e) => {

	e.preventDefault();

	const $nameInput = $('#input-box').val();
	$(e.currentTarget).parent().remove();
	const $name = $('<h1 id="name"></h1>').text($nameInput);
	$('body').prepend($name);

	const timePassing = () => {
		// $('#time').text('Time: ' + seconds + ' s');
		// console.log(`It has been ${seconds} seconds`);
		seconds ++;

// Original was 5 second interval
		if (seconds % 3 == 0) {
			pet.hunger ++;
			// $('#hunger').text('Hunger: ' + pet.hunger);
			// console.log(`Pet hunger increased at ${seconds}`);
		}

		$('#hungerProgress').css("width", (pet.hunger * 10)+ "%");

// Original was 15 second interval
		if (seconds % 5 == 0) {
			pet.sleepiness ++;
			// $('#sleepiness').text('Sleepiness: ' + pet.sleepiness);
			// console.log(`Pet sleepiness increased at ${seconds}`);
		}

// Original was 4 second interval
		if (lightToggle == true && pet.sleepiness > 1) {
			if (seconds % 4 == 0) {
				pet.sleepiness --;
				// console.log(lightToggle);
				// console.log(`Pet sleepiness decreased at ${seconds}`);
			}
		}

		$('#sleepinessProgress').css("width", (pet.sleepiness * 10)+ "%");

// Original was 10 second interval
		if (seconds % 3.5 == 0) {
			pet.boredom ++;
			// $('#boredom').text('Boredom: ' + pet.boredom);
			// console.log(`Pet boredom increased at ${seconds}`);
		}

		$('#boredomProgress').css("width", (pet.boredom * 10)+ "%");

// Original was 30 second interval
		if (seconds % 6 == 0) {
			pet.age ++;
			$('#age').text('Age: ' + pet.age);
			// console.log(`Pet age increased at ${seconds}`);
			if (pet.age == 3) {
				$('.livePet').attr('src', 'images/toddler.png');
				alert(`${$nameInput} has morphed into a toddler!`);
			} else if (pet.age == 6) {
				$('.livePet').attr('src', 'images/teen.png');
				alert(`${$nameInput} has morphed into a teen!`);
			} else if (pet.age == 9) {
				$('.livePet').attr('src', 'images/adult.png')
				alert(`${$nameInput} has morphed into an adult!`);
			}
		}

		if (pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10) {
			
			let causeOfDeath = '';
			if (pet.hunger == 10) {
				causeOfDeath = 'hunger';
			} else if (pet.boredom == 10) {
				causeOfDeath = 'boredom';
			} else if (pet.sleepiness) {
				causeOfDeath = 'sleepiness';
			}

			$('.deadPet').show();
			$('.livePet').hide();
			$('.darkRoom').hide();
			// console.log('Pet has died');
			clearInterval(timePasses);
			let deadMessage = $('<h1/>').text(`${$nameInput} has died of ${causeOfDeath}`).css('color', 'red')
			$(deadMessage).appendTo('section');
			$('.buttons').hide();
			$('.playAgain').show();
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
			// $('#hunger').text('Hunger: ' + pet.hunger);
			$('.livePet').animateCss('pulse');
			$('.livePet').animateCss('pulse', function() {
				$('.livePet').removeClass("animated pulse");
			});
		}
	});

// //////////////TURN OFF LIGHTS//////////////
	$('#lights').on('click', (e) => {
		if (lightToggle === false) {

			$('.livePet').animateCss('fadeOut', function() {
				$('.livePet').removeClass("animated fadeOut");
				$('.livePet').hide();
				$('.darkRoom').show();
				$('.darkRoom').animateCss('fadeIn', function() {
					$('.darkRoom').removeClass("animated fadeIn");
				});
			});


			$('#feed').hide();
			$('#play').hide();
			$('#lights').text("Wake Me Up");

			// if (pet.sleepiness > 1) {
			// 	pet.sleepiness --;
			// }

			lightToggle = true;

		} else {
			$('.livePet').show();
			$('#feed').show();
			$('#play').show();
			$('#lights').text("Turn Lights Off");
			$('.darkRoom').hide();
			$('.livePet').animateCss('rollIn');
			$('.livePet').animateCss('rollIn', function() {
				$('.livePet').removeClass("animated rollIn");
			});

			lightToggle = false;
		}
	});

// ///////////////PLAY WITH PET///////////////
	$('#play').on('click', (e) => {
		if (pet.boredom > 1) {
			pet.boredom --;
			// $('#boredom').text('Boredom: ' + pet.boredom);
			$('.livePet').animateCss('bounce');
			$('.livePet').animateCss('bounce', function() {
				$('.livePet').removeClass("animated bounce");
			});
		}
	});


// /////EXTEND JQUERY TO STOP ANIMATIONS/////
	$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});


})

