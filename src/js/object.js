const personPrototype = {
  firstName: 'John',
  lastName: 'Doe',
  age: 34,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};


export function executeTest() {
  const anotherPerson = Object.create(personPrototype);
  anotherPerson.firstName = 'Maria';
  console.log(anotherPerson);
  console.log(anotherPerson.firstName);
  console.log(anotherPerson.fullName());
}
