
// creating the array
let data = [];
for (let i = 0; i <= 10; i++) {
	data.push(~~(Math.random() * 100));	
};
console.log('\nOriginal array:' );
console.log(data);
console.log('\nQuick sort!\n');


let quickSort = (data, left = 0, right = (data.length - 1)) => {
	let index;

    if (data.length > 1) {

		index = partition(data, left, right);

        if (left < index - 1) quickSort(data, left, index - 1);

        if (index < right) quickSort(data, index, right);
    }
    return data;
};

let partition = (items, left, right) => {

    let pivot = items[ ~~((right + left) / 2) ];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        };
        while (items[j] > pivot) {
            j--;
        };
        if (i <= j) {
            [ data[i], data[j] ] = [ data[j], data[i] ]; 
            i++;
            j--;
        }
    }
    return i;
}

let swap = (data, firstIndex, secondIndex) => {
	let temp = data[firstIndex];

	data[firstIndex] = data[secondIndex];
	data[secondIndex] = temp;

	return data;
};


console.log('Sorted array:');
console.log(quickSort(data));