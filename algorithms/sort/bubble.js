// complexity: O(n*n));

// creating the array
let data = [];
for (let i = 0; i <= 10; i++) {
	data.push(~~(Math.random() * 100));	
};
console.log('\nOriginal array:' );
console.log(data);
console.log('\nBubble sort!\n');


//
let bubbleSort = data => {
	let flag;

	do {
		flag = false;
		for (let i = 0; i < (data.length - 1); i++) {
			if (data[i] > data[i + 1]) {
				[ data[i], data[i + 1] ] = [ data[i + 1], data[i] ]; 
				flag = true;
			}
		}
	} while (flag);

	return data;
};

console.log('Sorted array:');
console.log(bubbleSort(data));