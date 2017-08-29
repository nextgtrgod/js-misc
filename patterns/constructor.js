
class Person {
	constructor(name, age, country) {
		this.name = name
		this.age = age
		this.country = country
	}
};

const somePerson = new Person('Doge', 20, 'Japan');

console.log('created new person', somePerson);