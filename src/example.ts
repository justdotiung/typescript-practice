(function () {
  class Person {
    public readonly firstName: string = "Kim";
    public readonly country: string = "Korea";

    constructor(private _name: string, private age: number) {
      // 초기화 시키는 곳에서만 readonly를 변경 할 수 있다.
    }

    get name() {
      return this._name;
    }

    set name(n: string) {
      this._name = n;
    }

    hello() {
      // this.country = 'China' false
    }
  }

  const p1: Person = new Person("Mark", 39);

  console.log(p1.name); //get
  p1.name = "John"; //set
  console.log(p1.name); //get
})();
