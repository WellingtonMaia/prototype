
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'John',
  lastName: 'Doe',
  age: 34,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "Hellow";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

export function executeTest() {
  const person1 = new Person('Roberto', 'Silva', 30);
  console.log(person1)
  console.log(person1.fullName())
  console.log('------------------------------------');
  const person2 = new SubPerson('Maria', 'Souza', 25);
  console.log(person2)
  console.log(person2.fullName())
}
