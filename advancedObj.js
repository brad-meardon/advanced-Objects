// Reference Type

[] == [];
// will return false
[1] == [1];
// will also return false
var obj1 = {num: 2};
var obj2 = obj1;
var obj3 = {num: 2};
obj1 == obj2;
// will return true as object 2 is referencing object 1
obj1 == obj3;
// will return false as it is a whole new reference and this doesn't match object 1's reference

// Context vs Scope

function b(){
   let a = 4;
}; // Scope - it's own universe
console.log(a); // will return reference error as it can't read inside of the function
console.log(this); // "this" is the window object

function a(){
   console.log(this);
}; // will return the window

const obj4 = {
   a: function (){
      console.log(this);
   }
}; // Will return obj4 as that is the function a parent

// Instantiation

class Player {
   constructor(name, type){
      this.name = name;
      this.type = type;
   }
   introduce(){
      console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
   }
}

class Warlock extends Player{
   constructor(name, type){
      super(name, type)
   }
   play(){
      console.log(`Hello I'm a ${this.type}`);
   }
}

const warlock1 = new Warlock('Brad', 'Fighter');
const warlock2 = new Warlock('Tom', 'Bruiser');