
type Username = {
    theName: string
}

let userName:Username = {
    theName: "Merlin"
}
let salary:number = 8000
let amount:number = false
let likeCoding:boolean = true
let country:string = "New York"

// Task 2

type car = {
    brand: string
    model: string
    year: number
    isElectric: boolean
}

let CarObj:car = {
    brand: "Toyota",
    model: "RAV4",
    year: 2025,
    isElectric: true
}

// Task 3
type School = {
    name: string,
    city: string
}
type student = {
    name: string,
    age: number,
    school?: School
}

let student1:student = {
    name: "Ola",
    age: 60,
    school: {
        name: "Futa",
        city: "Akure"
    }
}
let student2:student = {
    name: "Ola",
    age: 60,
}















type Student = {
    name: string,
    age: number,
    middleName?: string,
    readonly id: string
}

let studentObg:Student = {
    name: "Lola",
    age: 80,
    middleName: "Labi",
    id: "sjj32j3"
}


// task 2
type listStudent = {
    readonly id: string,
    name: string,
    age: number,
    middleName?: string
}

let arrOdStudent:listStudent[] = [
    {id: "djdjdj", name: "Fola", age: 60, middleName: "lola"},
    {id: "wjsj", name: "Fola", age: 60, middleName: "lola"},
    {id: "djdjdj", name: "Fola", age: 60, middleName: "lola"},
]

