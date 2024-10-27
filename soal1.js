"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFullName = function (person) {
    return person.firstName.concat(" ", person.lastName);
};
console.log(getFullName({ firstName: "daniel", lastName: "sitohang" }));
