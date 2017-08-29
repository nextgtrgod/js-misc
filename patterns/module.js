
let counterModule = (() => {
	
	let counter = 0;

	let increaseCounter = () => counter++;

	let getCounter = () => counter;

	return {
		getCounter,
		increaseCounter
	};

})();

// variable counter is hidden from outer scope (closure)
// it can be get and set on with counterModule public functions
// getCounter() and increaseCounter()
// (Encapsulation)