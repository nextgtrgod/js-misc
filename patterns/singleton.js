
let counterModule = (() => {
	let instance,
		counter = 0;

	let getCounter = () => counter;

	let increaseCounter = () => counter++;

	let createInstance = () => ({
		getCounter,
		increaseCounter
	});

	return {
		getInstance: () => instance || (instance = createInstance())
	};
	// if we already have one instance of counterModule, we return it, 
	// not creating the new one
})();

// use
counterModule.getInstance().getCounter();
counterModule.getInstance().increaseCounter();
counterModule.getInstance().getCounter();