"use strict";
(function () {
    var Person = /** @class */ (function () {
        function Person(_name, age) {
            this._name = _name;
            this.age = age;
            this.firstName = "Kim";
            this.country = "Korea";
            // 초기화 시키는 곳에서만 readonly를 변경 할 수 있다.
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (n) {
                this._name = n;
            },
            enumerable: false,
            configurable: true
        });
        Person.prototype.hello = function () {
            // this.country = 'China' false
        };
        return Person;
    }());
    var p1 = new Person("Mark", 39);
    console.log(p1.name); //get
    p1.name = "John"; //set
    console.log(p1.name); //get
})();
