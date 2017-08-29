
let get = (URL, callback) => {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', URL, true);

	xhr.send();

	xhr.onreadystatechange = () => {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			console.error(xhr.status + ': ' + xhr.statusText);
			return;
		};
		
		callback(xhr.statusText);
	}

};