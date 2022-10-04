

let sales = 123_456_789;

let course: string = 'TypeScript';

let is_published: boolean = true;

let level;

// arrays

// let numbers: number[] = [1, 2, 3, '4', 5];

// numbers.forEach(n => n.)

//tuples

// 1, 'Callum'

let user: [number, string] = [1, 'Callum'];


let man = 'louis';

//enums

//enums represent a list of related constants. for example imagine we want to define the sizes of t shirts as constants:

const small = 1;
const medium = 2;
const large = 3;

// one way to list these is to group them together like so:

//PascalCase     ... and by default the typescript compliler assigns the first member the value of zero, although there are other ways to assign values too.
enum Size { Small = 0, Medium = 1, Large = 2 };

let mySize: Size = Size.Medium;

console.log(mySize);
