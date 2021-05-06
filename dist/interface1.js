"use strict";
function hello2(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694 ! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p21 = {
    name: 'Mark',
};
var p22 = {
    name: 'potor',
    age: 23,
    sister: ['Anna', 'Kym'],
};
var p23 = {
    name: 'potor',
    age: 44,
    mather: p22,
    father: p21,
};
hello2(p21);
