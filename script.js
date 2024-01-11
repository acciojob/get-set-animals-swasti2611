//complete this code
class Animal {
	Constructor(species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
	set species(species){
		 this.species=species;
	}
	makeSound(){
		console.log(` the ${species}sounds a animal`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
