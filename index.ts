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
    address?: Address
}


let person1: Person = {
    name: "Legend",
    age: 20,
    isStudent: true,
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

function displayInfo(person){
    console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1)


let ages:number[] = [100, 800, 5999]
ages.push(70)

type Person1 = {
    name: string,
    age: number,
    isStudent: boolean
}

let per1: Person1 = {
    name: "sege",
    age: 509,
    isStudent: false
}
let per2: Person1 = {
    name: "layi",
    age: 800,
    isStudent: true
}

//Challenge: create an array of people objects and manually type it as an array of person types

let people:Person1[] = [per1, per2]