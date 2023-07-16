// tsc (for compiling)+ node dist/index.js
// @ts-check
// to force the variable to be a fixed one type and when i change it, i should change the value of this type not the type
let myName: string = 'Abdelrahman'
let myAge: number = 40

// Accept any datatype
let all: any = 54
let anything; // by default = any

// Function ,,, And the return of this function should be number 
const testFunction = (num1: number, num2: number): number=>{
    return num1 + num2
}
// console.log(testFunction(10 , 10))

// to make more than one type for the variable
let justTwo: string | number;
justTwo = 'Abdelrahman'
justTwo = 21
// justTwo = true

// Array
let myFriends: (string | number)[] = [1 , 2 , 3 ,'Ahmed', 'Kareem', 'Ezz' ]
for(let i =0; i < myFriends.length; i++){
    // console.log(myFriends[i])
}

// Nested Array

// You can set your array as you like and move the mouse on the variable name and the compiler will help you
let testing: (string | (number | boolean[])[])[]= ['One' , 'Two', [3, 4, [true]]]

// Lesson 9
// to skip arguments and set default ones
const showData = (name: string, age: number, country: string= 'Unknown')=> `${name} - ${age} - ${country}`
// console.log(showData('Abdelrahman', 21));

//or (Optional) and optional parameter should be last one
const newData = (name: string, age: number, country?: string)=> `${name} - ${age} - ${country}`
// console.log(newData('Abdelrahman', 21));

// Lesson 10
function addAll(...nums: number[]): number{
    let result = 0;
    // for(let i=0; i < nums.length; i++){
    //     result += nums[i]
    // }
    nums.forEach((num)=> result += num)
    return result
}
// console.log(addAll(100,30,20, 50))

//Lesson 11 (Arrow Function)
const addWithArrow = (num1: number, num2: number) : number => num1 + num2
// console.log(addWithArrow(7,7))

// Lesson 12 (Alias Type - Datatype)
type st = string;
let theName: st = 'Abdelrahman'
// console.log(theName)
theName = 'Abdo'
// console.log(theName)

type stAndNum = string | number;
let all1: stAndNum = 'Boda'
// console.log(all1)
all1 = 21
// console.log(all1)

// Lesson 13 (More than one type with Alias)
type moreTypes = {
    one: string,
    two: number,
}
type extraOne = moreTypes &{
    three: boolean
}

// const getData = function(btns: extraOne){
//      console.log(btns.one)
//      console.log(btns.two)
//      console.log(btns.three)
// }

// getData({one: 'Abdelrahman',two: 21, three: true})

//Lesson 14 (Literal Types)
// You can set outputs that you think it should appear in a type such as:
type nums = 1 | 0 |-1;

function compare(num1: number, num2: number) : nums{
    if(num1 === num2){
        return 0
    }else if(num1 > num2){
        return 1
    }else{
        return -1
    }
}
// console.log(compare(20,20))
// console.log(compare(15,20))
// console.log(compare(30,20))

// Lesson 15 (Tuple) (It's good for React JS) >>> ARRAYS
let article: readonly[number, string, boolean];
article = [21, 'Abdelrahman', true]
// article.push('GSU') >> When you write readonly on the array it never allowed to push or add any more than types you entered
// console.log(article)

const [age, name1, status1]= article;
// console.log(age)
// console.log(name1)
// console.log(status1)

// Lesson 16

/*
Void
1- Function will not return anything 
2- In JS it will show undefined 
*/

// const logging = (meg: string): void =>{
//     console.log(meg)
//     return ; // will not return a value
// }
// logging('My Name Is Abdelrahman')

/*
Never
1- Never returns
2- Doesn't have a normal completion such as infinity loop and throw error and never finishes running at all
3- Any code after this function will be unreadable because it is infinite loop
*/

// const fail = (meg: string): never =>{
//     while(true){
//         console.log(meg)
//     }
//     // it will not return anything whatever such as return word
//     return
// }
// fail('Abdo')

// Lesson 17 & 18 ( Enums )
enum names{
    beginner = 9,
    intermediate = 6,
    professional =3
}

const myHardEnum=()=> 3;

// Referring to another enum
enum level  {
EASY = names.beginner,
MEDIUM = names.intermediate,
HARD = myHardEnum()
}
 let lvl: string = 'Easy'
 if(lvl === 'Hard'){
    // console.log(`The level is ${lvl} and the number of seconds are ${level.HARD}`)
 }

// Lesson 19
// Type Assertion >>> to assign the element for the variable

// let myImage = document.getElementById('img') as HTMLImageElement;
// let myImage =<HTMLImageElement> document.getElementById('img');
// console.log(myImage.src)

let data: any = '21';
// console.log((data as string).repeat)

// Lesson 20

type A ={
    one: string
}

type B = A & {
    two: number
}

type mix = A & B

// const testTypes = (btns: mix)=> {
//     console.log(btns.one)
//     console.log(btns.two)
// }
// testTypes({one: 'Abdelrahman', two: 21})

// Lesson 21 (Type Annotations With Object)
// Nested Object
let myObject : {
    user: string,
    id: number,
    skills: {
        one: string,
        two?: string // THIS QUESTION MARK IS TO MAKE IT OPTIONAL TO WRITE OR NOO
    }
} = {
    user: 'Abdelrahman',
    id: 1111,
    skills: {
        one: 'JavaScript',
    }
}

// Lesson 22
// U can use interface with 
interface User {
    age: number,
    name: string,
    country: string,
    phoneNumber?: number,
}

const user2: User = {
    age: 21,
    name: 'Abdelrahman',
    country: 'Egypt',

}
// console.log(user2)

//Lesson 23

interface myData {
    id: number,
    name: string,
    sayHello(): string,
    sayWelcome(): string,
    getDouble(num: number): number,
}

let me: myData = {
    id: 11,
    name: 'Abdelrahman',
    sayHello() {
        return `Hello ${this.name}`
    },
    sayWelcome() {
        return `Welcome ${this.name}`
    },
    getDouble(num) {
        return num * 11
    },
}

// console.log(me.id)
// console.log(me.name)
// console.log(me.sayHello())
// console.log(me.sayWelcome())
// console.log(me.getDouble(11))

// Lesson 24

// Home Page
interface Settings {
    theme: boolean,
    font: string,
}

// About Page
interface Settings {
    sidebar: boolean,
}

// Contact Page
interface Settings {
    external: boolean
}

let userSettings: Settings = {
    theme: true,
    font: 'Open Sans',
    sidebar: false,
    external: true,
}

// Lesson 25

interface generalSettings {
    username: string,
    country: string,
}

interface Moderator {
    role: string | number,
}

interface Admin extends generalSettings, Moderator{
    protect: boolean
}

let user: Admin = {
    username: 'Abdelrahman',
    country: 'Egypt',
    role: 'Mod',
    protect: false,
}

// Lesson 27
class Users {
    u: string;
    s: number;
    msg: ()=> string;
    constructor(username:string, salary:number){
        this.u = username;
        this.s = salary;
        this.msg = function(){
            return `Hello ${this.u} your salary is ${this.s}`
        };
    }
    sayMsg(){
        return `Hello ${this.u} your salary is ${this.s}`
    }
}

let userOne = new Users('Abdelrahman', 9000);

//Lesson 28

/*
private: When a class member is marked as private, it is only accessible within the class where it is defined. It cannot be accessed from outside the class, including its instances or derived classes. This ensures encapsulation and data hiding, preventing direct access to sensitive or internal implementation details.

protected: When a class member is marked as protected, it is accessible within the class where it is defined and its derived classes. It is not accessible from outside the class or its instances directly. This allows derived classes to access and override the protected member.
*/

//Lesson 29

// getters && setters

// Lesson 30

class UserTwo {
    private static created: number = 0;
    static getCount(): void{
        // console.log(`${this.created} Objects Created`)
    }
    constructor(public username: string){
        UserTwo.created++;
    }
}

let u1 = new UserTwo('Abdelrahman')
let u2 = new UserTwo('Mostafa')
let u3 = new UserTwo('Ahmed')
UserTwo.getCount()

// Lesson 31

interface Settings3 {
    theme: boolean,
    save(): void,
}

class UserThree implements Settings3 {
    constructor(public username: string, public theme: boolean){}
    save(): void {
        // console.log('Saved')
    }
    update():void{
        // console.log('Update')
    }
}

let userThree = new UserThree('Abdelrahman', true)

// Lesson 32

abstract class Food {
    constructor(public title: string){}
    abstract getCookingTime(): void;
}

class Pizza extends Food {
    constructor(title: string, public price: number){
        super(title);
    }

    getCookingTime(): void {
        // console.log("It's a pizza")
    }
}

class Burger extends Food {
    constructor(title: string, public price: number){
        super(title);
    }

    getCookingTime(): void {
        // console.log("It's a Burger")
    }
}

let pizzaOne = new Pizza('Awesome Pizza' , 100)

// console.log(pizzaOne.title)
// console.log(pizzaOne.price)
pizzaOne.getCookingTime()

// Lesson 33

class Player {
    constructor (public name: string){}
    attack(): void{
        console.log('Attacking Now')
    }
}

class Amazon extends Player {
    constructor(name: string, public spears: number){
        super(name)
    }
    override attack(): void {
        super.attack()
        console.log('With Spears');
        this.spears -= 1;
    }
}

class Barbarian extends Player {
    constructor(name: string, public axeDurability: number){
        super(name)
    }
    override attack(): void {
        super.attack()
        console.log('With Axe');
        this.axeDurability -= 1;
    }
}

let barOne = new Barbarian ('Abdelrahman', 12);

// console.log(barOne.name)
// barOne.attack()
// console.log(barOne.axeDurability)

// Lesson 34

function returnType<T>(value: T): T{
    return value
}

// console.log(returnType<number>(100))
// console.log(returnType<string>('Abdelrahman'))
// console.log(returnType<boolean>(true))

// Lesson 35

const arrowSyntax = <T>(value: T): T=>  value;

function testType<T>(value: T): string{
    return `The value is ${value} and type is ${typeof value}`
}

// console.log(testType<number>(100))
// console.log(testType<string>('Abdelrahman'))

// Lesson 36

class User6 <T = string>{ 
    constructor(public value: T){   }
        show(msg: T) : void{
            console.log(`${msg} - ${this.value}`)
        }
}

let theUser = new User6 <string | number>(1111)
console.log(theUser.value)
theUser.show('New Message')

// Lesson 37

class Collection<T> {
    public data: T[] = [];
    add(item: T): void{
        this.data.push(item)
    }
}

interface Book {
    itemType: string;
    title: string;
    price: number;
}

let itemType = new Collection<Book>();

itemType.add({itemType: 'Book', title:'Rich Dad Poor Dad', price: 175})
itemType.add({itemType: 'Book', title:'Atomic Habits', price: 150})

console.log(itemType)