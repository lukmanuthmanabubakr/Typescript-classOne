
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