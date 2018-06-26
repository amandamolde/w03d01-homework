let seconds = 0;

const timePassing = () => {
	console.log(`It has been`);
	seconds ++;

	if (seconds % 3 == 0) {
		pet.hunger ++;
	}

	if (pet.hunger > 10 || pet.boredom > 10 || pet.sleepiness > 10) {
		console.log('Pet has died')
		clearInterval(timePasses);
	}

}

const timePasses = setInterval(timePassing, 1000);