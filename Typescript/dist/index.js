"use strict";
let myName = 'Abdelrahman';
let myAge = 40;
let all = 54;
let anything;
const testFunction = (num1, num2) => {
    return num1 + num2;
};
let justTwo;
justTwo = 'Abdelrahman';
justTwo = 21;
let myFriends = [1, 2, 3, 'Ahmed', 'Kareem', 'Ezz'];
for (let i = 0; i < myFriends.length; i++) {
}
let testing = ['One', 'Two', [3, 4, [true]]];
const showData = (name, age, country = 'Unknown') => `${name} - ${age} - ${country}`;
const newData = (name, age, country) => `${name} - ${age} - ${country}`;
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
const addWithArrow = (num1, num2) => num1 + num2;
let theName = 'Abdelrahman';
theName = 'Abdo';
let all1 = 'Boda';
all1 = 21;
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
let article;
article = [21, 'Abdelrahman', true];
const [age, name1, status1] = article;
var names;
(function (names) {
    names[names["beginner"] = 9] = "beginner";
    names[names["intermediate"] = 6] = "intermediate";
    names[names["professional"] = 3] = "professional";
})(names || (names = {}));
const myHardEnum = () => 3;
var level;
(function (level) {
    level[level["EASY"] = 9] = "EASY";
    level[level["MEDIUM"] = 6] = "MEDIUM";
    level[level["HARD"] = myHardEnum()] = "HARD";
})(level || (level = {}));
let lvl = 'Easy';
if (lvl === 'Hard') {
}
let data = '21';
let myObject = {
    user: 'Abdelrahman',
    id: 1111,
    skills: {
        one: 'JavaScript',
    }
};
const user2 = {
    age: 21,
    name: 'Abdelrahman',
    country: 'Egypt',
};
let me = {
    id: 11,
    name: 'Abdelrahman',
    sayHello() {
        return `Hello ${this.name}`;
    },
    sayWelcome() {
        return `Welcome ${this.name}`;
    },
    getDouble(num) {
        return num * 11;
    },
};
let userSettings = {
    theme: true,
    font: 'Open Sans',
    sidebar: false,
    external: true,
};
let user = {
    username: 'Abdelrahman',
    country: 'Egypt',
    role: 'Mod',
    protect: false,
};
class Users {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} your salary is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.u} your salary is ${this.s}`;
    }
}
let userOne = new Users('Abdelrahman', 9000);
class UserTwo {
    static getCount() {
    }
    constructor(username) {
        this.username = username;
        UserTwo.created++;
    }
}
UserTwo.created = 0;
let u1 = new UserTwo('Abdelrahman');
let u2 = new UserTwo('Mostafa');
let u3 = new UserTwo('Ahmed');
UserTwo.getCount();
class UserThree {
    constructor(username, theme) {
        this.username = username;
        this.theme = theme;
    }
    save() {
    }
    update() {
    }
}
let userThree = new UserThree('Abdelrahman', true);
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
    }
}
let pizzaOne = new Pizza('Awesome Pizza', 100);
pizzaOne.getCookingTime();
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log('Attacking Now');
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log('With Spears');
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        super.attack();
        console.log('With Axe');
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian('Abdelrahman', 12);
function returnType(value) {
    return value;
}
const arrowSyntax = (value) => value;
function testType(value) {
    return `The value is ${value} and type is ${typeof value}`;
}
class User6 {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let theUser = new User6(1111);
console.log(theUser.value);
theUser.show('New Message');
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemType = new Collection();
itemType.add({ itemType: 'Book', title: 'Rich Dad Poor Dad', price: 175 });
itemType.add({ itemType: 'Book', title: 'Atomic Habits', price: 150 });
console.log(itemType);
//# sourceMappingURL=index.js.map