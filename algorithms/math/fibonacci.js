
// slow
let fibonacciRecursive = n => (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);


// faster
let fibonacciCycle = n => {
	let a = 1;
	let b = 1;
	let c;

	for (let i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
};