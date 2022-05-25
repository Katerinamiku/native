const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}

const copyUser = {...user}
copyUser.friends.push("Ann")
console.log(user)
console.log(user === copyUser) //будет фолс, так как разные адреса
console.log(user.friends === copyUser.friends)// будет тру, так как внутри user лежит ссылка на массаив, и к этой
// ссылке один доступ, следовательно один массив на двоих. Нужно это учитывать при копировании

const deepCopy = {...user, friends: [...user.friends], address: {...user.address}}

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"}
]
const copyStudents = [...students]
console.log(copyStudents)

// const deepCopyStudents = []
// for (let i = 0; i< students.length; i++) {
//     deepCopyStudents[i] = {...students[i]}
// }
//метод map вернет новый массив
const deepCopyStudents = students.map(student => ({...student}))


// 1 part----------------------
// const arr = [1,2,3,4]
// const copyUser = user //здксь просто ссылка, не создается новый обьект, так как для создания обьекта надо особое
// // описание

// new Object(...)
// new Array(...)

// user.name = 'Anne'
// console.log(copyUser.name)
//
// const realCopyUser = {...user} // уже в другой ячуйке #4578 новый обьект с копией
//
// // realCopyUser.name = user.name
// // realCopyUser.age = user.age
// // realCopyUser.isMarried = user.isMarried // это все можно заменить на {...user}
// const realCopyArr = [...arr]
// console.log(realCopyUser)
// console.log(realCopyUser === user) //false, так это разные ссылки, разные адреса, хоть они и одинаковые свиду
// console.log(copyUser === user) //это ссылка на один и тот же обтект с одним и тем же адресом
// realCopyUser.name = 'Bob'
// console.log(user.name)

