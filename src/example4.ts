// abstract
(function () {
  abstract class AbstractClass {
    protected _name: string = "mark";

    abstract setName(): void;
  }

  class Person extends AbstractClass {
    setName(): void {
      this._name = "class";
    }
  }

  const person = new Person();
  person.setName();
})();
