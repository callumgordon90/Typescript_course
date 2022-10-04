"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
// arrays
// let numbers: number[] = [1, 2, 3, '4', 5];
// numbers.forEach(n => n.)
//tuples
// 1, 'Callum'
let user = [1, 'Callum'];
let man = 'louis';
//enums
//enums represent a list of related constants. for example imagine we want to define the sizes of t shirts as constants:
const small = 1;
const medium = 2;
const large = 3;
// one way to list these is to group them together like so:
//PascalCase     ... and by default the typescript compliler assigns the first member the value of zero, although there are other ways to assign values too.
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map