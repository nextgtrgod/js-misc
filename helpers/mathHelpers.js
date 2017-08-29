//
const getRandom = (min = 0, max = 1, float = false) => {

	let result = (Math.random() * (max - min)) + min;
	
	if (!float) result = Math.round(result);

	return result;
};


// check if number is integer
const isInt = (n) => (~~n) === n;