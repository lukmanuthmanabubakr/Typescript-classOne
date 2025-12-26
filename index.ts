let myName: string = "Legend"

// Premitives data types: string, number, boolean
// challenge: explicity type the vairble below

let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Food = string

let favFood: Food = "yam"

// Challenge 1: finish the object type definition

// challenge 2: try to figure out how to move the nexted address object type into a seperate type definition, when done correctly there should notbe any red error in my editor

type Address = {
    street: string,
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}


let person1: Person = {
    name: "Legend",
    age: 20,
    isStudent: true,
    address: {
        street: "string",
        city: "string",
        country: "string"
    }
}

let person2: Person = {
    name: "Leye",
    age: 26,
    isStudent: false,
      address: {
        street: "string",
        city: "string",
        country: "string"
    }
}