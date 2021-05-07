export interface Prototype {
  clone(): Prototype;
}
export class Address {
  constructor(public street: string, public number: number) { }
}
export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) { }

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address)
  }

}

export function executeTest() {
  const address1 = new Address('Av. Brasil', 15);
  const person1 = new Person('John', 58);
  person1.addAddress(address1);
  const person2 = person1.clone();

  person1.addresses[0].street = "Av. Salim Maluf";

  person2.name = 'Mariah'
  console.log(person2);
  console.log(person2.name);
  console.log(person2.addresses);
}