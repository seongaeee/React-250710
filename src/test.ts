/*
// 타입 추론론
let num: number
num = 1
num = 2
console.log(num)

const user: {
  name: string
  age: number
} = {
  name: 'John',
  age: 20
}
console.log(user)

//// 제네릭
function add<T>(a: T, b: T) {
  return a + b
}
add<number>(1, 2)
add<string>('A', 'B')
// add(1, 'B') X

//// 클래스
class Person {}
const person: Person = new Person()
const n: number = 1

//// 인터페이스
interface User<T> {
  name: string
  age: T
}
const userA: User<number> = {
  name: 'John',
  age: 20
}
const userB: User<string> = {
  name: 'Evan',
  age: '21'
}

//// 타입 단언
const inputE = document.querySelector('input')
//console.log(inputE.value) // null일 수 있어서 오류 발생
console.log(inputE!.value) // ! : Non-null 단언 연산자 (null 아님을 확신)

if (inputE) {
  console.log(inputE.value)
}

// as 단언 키워드
console.log((inputE as HTMLInputElement).value)

// 유사배열
const fruits = ['apple', 'banana', 'cherry']
const fruitsLike = {
  0: 'apple',
  1: 'banana',
  2: 'cherry',
  length: 3
}

fruits.push('orange')
fruitsLike.push('orange') // 불가능

const fruitsLikeArray = Array.from(fruitsLike) // 실제 배열로 변환
fruitsLikeArray.push('orange')

const liEls = document.querySelectorAll('li')
Array.from(liEls).filter()

//
const user2 = {
  name: 'John',
  age: 20
}

const { name, age = 1, email = 'test@test.com' } = user2
console.log(age) // 20
console.log(email) // test@test.com


///
const user3 = {
  name: 'John',
  age: 20,
  email: 'test@test.com',
  isAdmin: true
}

const { name, age, ...abc } = user3
console.log(name)
console.log(age)
console.log(abc) // {email: 'test@test.com', isAdmin: true}

const numbers = [1, 2, 3, 4, 5, 6]
const [a, b, , c, ...xyz] = numbers
console.log(a)
console.log(b)
console.log(c) // 4
console.log(xyz) // [5, 6]


interface UserA {
  name: string
}

interface UserB {
  age: number
}

const user: UserA & UserB = {
  name: 'John',
  age: 20
}

console.log(user)

const isDone = true
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('대기')
    if (isDone) {
      resolve(123) // 이행
    } else {
      reject() // 거부
    }
  }, 3000)
})

const res = await promise
console.log(res) // 123

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

const res2 = await delay(3000)
console.log(res2) // 3000
*/

import hello, { a, b as x } from './test'

interface User {
  name: string
  age: number
}

type User2 = {
  name: string
  age: number
}
