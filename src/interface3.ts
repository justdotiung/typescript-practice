interface Person3 {
  name: string;
  hello(): void;
}

class Person implements Person3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`My name is ${this.name}`);
  }
}

{
  const person: Person3 = new Person("Mark");
  person.hello();
}
