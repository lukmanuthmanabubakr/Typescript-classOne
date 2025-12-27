var myName = "Legend";
// Premitives data types: string, number, boolean
// challenge: explicity type the vairble below
var numberOfWheels = 4;
var isStudent = false;
var favFood = "yam";
var person1 = {
    name: "Legend",
    age: 20,
    isStudent: true,
};
var person2 = {
    name: "Leye",
    age: 26,
    isStudent: false,
    address: {
        street: "string",
        city: "string",
        country: "string"
    }
};
function displayInfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
}
displayInfo(person1);
var ages = [100, 800, 5999];
ages.push(70);
var per1 = {
    name: "sege",
    age: 509,
    isStudent: false
};
var per2 = {
    name: "layi",
    age: 800,
    isStudent: true
};
//Challenge: create an array of people objects and manually type it as an array of person types
var people = [per1, per2];
