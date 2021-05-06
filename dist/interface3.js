"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("My name is " + this.name);
    };
    return Person;
}());
{
    var person_1 = new Person("Mark");
    person_1.hello();
}
