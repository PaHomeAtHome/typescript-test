class Key {
  signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  key: number;
  constructor(key: number) {
    this.key = key;
  }

  getKey(): number {
    return this.key;
  }
}

abstract class House {
  public door = "closed";
  key: number;
  tenants: Person[] = [];

  constructor(key: number) {
    this.key = key;
  }

  comein(person: Person) {
    if (this.door === "open") {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: number): void;
}

class MyHouse extends House {
  public openDoor(key: number) {
    if (key === this.key) {
      this.door = "open";
    }
  }
}

const createdKey = new Key();
const key = createdKey.getSignature();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(key);
house.comein(person);

console.log(house.tenants);
