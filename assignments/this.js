/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default in which the this keyword is bound to the window

* 2. With Implicit binding, the this keyword is bound to whatever is to the left of the dot

* 3. New binding is when a new function is created and the this keyword pulls info from another function into the new function

* 4. With explicit binding you can tell JavaScript to point to a certain value using call, apply, or bind


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const thisVariable = function() {
  console.log(this);
};

console.log(thisVariable());

// Principle 2

// code example for Implicit Binding

let Me = {
  name: "Brandon",
  age: 26,
  sex: "Male",
  speak: function() {
    console.log(`${this.name} is a ${this.age} year old ${this.sex}.`);
  }
};

Me.speak();

// Principle 3

// code example for New Binding

let Pet = function(name, age) {
  this.name = name;
  this.age = age;
};

let dog = new Pet("Jade", 3);
console.log(dog);
let cat = new newPet("Pete", 2);
console.log(cat);

// Principle 4

// code example for Explicit Binding

function Dog() {
  console.log(this.sound);
}

let myDog = {
  name: "Jade",
  age: 3,
  sound: "Woof"
};

Dog.call(myDog);
