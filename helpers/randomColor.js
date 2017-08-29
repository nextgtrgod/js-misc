// get random hex color
let getRandomColor = () => {
	let hexColor = '#';
	let charsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
						'A', 'B', 'C', 'D', 'E', 'F'];

	for (i = 0; i < 6; i++) {
		hexColor += charsArray[ getRandom(0, 15) ];
	};

	return hexColor;
};