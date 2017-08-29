class EventObserver {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter(subscriber => subscriber !== fn);
	}

	broadcast(data) {
		this.observers.forEach(subscriber => subscriber(data));
	}
};


const observer = new EventObserver();

observer.subscribe(data => {
	console.log('subscribe for module 1 fired', data)
});

observer.subscribe(data => {
	console.log('subscribe for module 2 fired', data)
});

observer.broadcast({ someData: 'hello' });