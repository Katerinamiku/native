const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//----------------------MAP----------------
const Names = students.map(el => el.name)
console.log(Names)

const addScores = (arr) => {
    const result = []
    const func = (st) => ({...st, scores: st.scores + 10})
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

console.log(addScores(students))

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(getMappedArray(students, (st) => st.name))
console.log(getMappedArray(students, (st) => ({...st, scores: st.scores + 10})))

console.log(students.map((st) => st.name))

//--------------------FILTER----------------
console.log(students.filter(st => st.scores > 100))


const myFilter = (arr, func) => {
  const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        if ((newValue) >= true) {
            result.push(arr[i])
        }
    }
    return result
}
const callBackFn = st => st.scores >= 100
console.log(myFilter(students, callBackFn))

//callBack - это фунцкия которую мы передаем куда то в управляющий код - func. можно использовать
// название func или свое какое то имя callBackFn Нельзя использовать () так она вызывается другой функцией а не нами

//----------------------FIND-----------------
//возврашает один элемент массива

const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])  //true или false
        if ((newValue) === true) {
            return arr[i]
        }
    }
    return result
}
console.log(students.find(st => st.name === 'Alex')) // вернул первого совпавшего!! но не все!!!

console.log(
    myFind(students, callBackFn)
)

