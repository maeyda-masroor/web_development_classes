"use strict";
let personalMessage = "Maeydah1";
console.log(`Hello ${personalMessage}, would you like to learn 
some Python today?`);
console.log(personalMessage.toLowerCase());
console.log(personalMessage.toUpperCase());
console.log(personalMessage.substr(0, 1).toUpperCase() + personalMessage.slice(1));
let famousQuotes = `"A person who never made a mistake never tried anything new."`;
let famousAuthor = "Albert Einstein";
console.log(`${famousQuotes} - ${famousAuthor}`);
let personName = "\tMaeydah\t\n";
console.log(`${personName}`);
console.log(`${personName.trim()}`);
console.log(16 - 8);
console.log(4 * 2);
console.log(16 / 2);
console.log(4 + 4);
let favouriteNumber = "9";
console.log(favouriteNumber);
let nameArray = ["maeydah", "Ahmed", "Munim"];
for (let i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}
for (let i = 0; i < nameArray.length; i++) {
    console.log(`hi,${nameArray[i]}`);
}
let modeOfTransportation = ['motorcylce', "car", "bicycle"];
for (let i = 0; i < modeOfTransportation.length; i++) {
    console.log(`i would like to own a honda ${modeOfTransportation[i]}`);
}
let guestList = ["Elvis Presley", "Michael Jackson", "The Beatles"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi ${guestList[i]} i would to invite you for a dinner`);
}
let guestWhoCantMakeIt = "Elvis Presley";
let newPerson = "ellen";
guestList = guestList.filter(guest => guest != guestWhoCantMakeIt);
guestList.push(newPerson);
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList} dear we have found a bigger and are inviting more guest`);
}
guestList.push('ali');
let middleindex = guestList.length / 2;
guestList.splice(middleindex, 0, "Kiran");
console.log(guestList);
guestList.push('dd');
for (let i = 0; i < guestList.length; i++) {
    console.log(`hi ${guestList[i]}`);
}
console.log("You can invite only two people for dinner.");
while (guestList.length > 2) {
    const removedGuests = guestList.pop();
    if (removedGuests) {
        console.log(`Sorry, ${removedGuests}, I can't invite you to dinner.`);
    }
}
console.log("\nInvitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}, you're still invited.`);
}
let locations = ["Paris", "Tokyo", "New York", "London", "Berlin"];
for (let i = 0; i < locations.length; i++) {
    console.log(`Original List :${locations[i]} `);
}
let l1 = locations;
l1.sort();
console.log("\nAlphabetically sorted list: ");
for (let j = 0; j < l1.length; j++) {
    console.log(`Sorted List :${l1[j]}`);
}
for (let i = 0; i < locations.length; i++) {
    console.log(`Original List :${locations[i]} `);
}
let locRev = locations;
locRev.sort().reverse();
console.log(locRev);
console.log(`Number of people invited to dinner ${guestList.length}`);
let mountains = ["abc", "xyz"];
let rivers = ["aa", "bb"];
let countries = ["cc", "dd", "cc"];
let langauges = ["urdu", "english"];
for (let i = 0; i < mountains.length && rivers.length
    && countries.length && langauges.length; i++) {
    console.log(`${mountains[i]}`);
    console.log(`${rivers[i]}`);
    console.log(`${countries[i]}`);
    console.log(`${langauges[i]}`);
}
let car = 'honda';
console.log("is car ===  'honda' ? I predict false.");
console.log(car === "honda");
let message = 'i recieved';
console.log(message === 'i havent');
let name1 = 'maeydah';
console.log(name1 !== 'john');
let number = 2;
console.log(number >= 2);
console.log(4 < 3);
let x = [1, 2, 3];
console.log(x.includes(2));
console.log(!(x.length > 3));
let pattern = `\maeydah`;
console.log(name1.match(pattern));
if (car === 'honda' && message !== 'i havent received anything yet') {
    console.log('True');
}
car.toUpperCase();
if (car.toLowerCase()) {
    console.log('true');
}
else {
    console.log('false');
}
if (number < 2) {
    console.log('number less than 2');
}
else if (number > 2) {
    console.log('number greater than 2');
}
else if (number === 2) {
    console.log('number equal');
}
else if (number <= 2) {
    console.log('greater than equal 2');
}
else if (number >= 2) {
    console.log('number equal 2');
}
let number2 = 4;
if (number2 % 2 == 0 && number % 2 == 0) {
    console.log(' both even');
}
if (number % 2 == 0 || number % 2 == 0) {
    console.log('one is even');
}
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('you have earn 5 points');
}
else {
    console.log('you have 10 points');
}
if (alien_color == 'green') {
    console.log('5 points');
}
else if (alien_color == 'yellow') {
    console.log('10 points');
}
else if (alien_color == 'red') {
    console.log('15 points');
}
let person = 2;
if (person < 2) {
    console.log('baby');
}
if (person >= 2 && person <= 4) {
    console.log('toddler');
}
else if (person >= 4 && person <= 13) {
    console.log('kid');
}
else if (person >= 13 && person <= 20) {
    console.log('teenager');
}
else if (person >= 20 && person <= 65) {
    console.log('adults');
}
else {
    console.log('elder');
}
let favorite_fruits = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('banana')) {
    console.log('you really like banana');
}
else if (favorite_fruits.includes('orange')) {
    console.log('You really like orange');
}
console.log("Here are " + favorite_fruits + "are my favorite fruits");
let users = ['Eric', 'admin'];
for (let i = 0; i < users.length; i++) {
    if (users[i] === 'admin') {
        console.log(`${users[i]} would you like to see special report`);
    }
    else {
        console.log(` hello ${users[i]} , thank you for logging in again`);
    }
}
for (let i = 0; i <= users.length; i++) {
    users.pop();
}
console.log(users.length);
if (users.length === 0) {
    console.log('we need to add users');
}
let current_users = ['John', 'john', 'Jane', 'Jack', 'jack'];
let new_user = 'Mike';
if (!current_users.includes(new_user)) {
    current_users.push(new_user);
    console.log(`${new_user} added successfully`);
}
else {
    console.log(`Sorry ${new_user}, already exists.`);
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let pizza = ['pepperoni', 'mushrooms', 'onions', 'green peppers'];
for (let i = 0; i < pizza.length; i++) {
    if (pizza[i] === "onions") {
        console.log(` i really like ${pizza[i]}\n`);
    }
}
console.log('i like pizza');
let animals = ["dog", "cat", "fish"];
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
function make_shirt(message, size) {
    let sizes = ["Small", "Medium", "Large"];
    return `Your t-shirt is ${sizes[size - 1]} with "${message}`;
}
console.log(make_shirt("Learning JavaScript is Fun!", 3));
function make_shirt1(message, size) {
    let sizes = ["small", "medium", "large"];
    let defSize = 2;
    let defMessage = "I love TypeScript";
    if (!size) {
        size = defSize;
    }
    else if (size > 3 || size < 1) {
        throw new Error("Invalid Size");
    }
    if (!message) {
        message = defMessage;
    }
    return `${sizes[size - 1]}, here's what's on my ch`;
}
console.log(make_shirt1(`ccc`, 1));
function describe_city(cityCountryPair) {
    let citiesCountries = [
        "Lahore,Pakistan",
        "Tokyo,Japan",
        "New,USA"
    ];
    for (let i in citiesCountries) {
        if (citiesCountries[i].includes(cityCountryPair)) {
            return `"${cityCountryPair}" is ${citiesCountries[i]}.`;
        }
    }
    return "";
}
;
console.log(describe_city("Lahore,Pakistan"));
function make_album(artistname, albumtitle) {
    const album = {};
    album["Artist Name"] = artistname;
    album["Album Title"] = albumtitle;
    return album;
}
console.log(make_album("Michael Jackson", "Thriller"));
const magicNames = ["David Copperfield", "Dave McLean", "Derren Brown"];
function show_magicians(arrayOfNames) {
    for (let i = 0; i < magicNames.length; i++) {
        console.log(`Showing Magician: ${arrayOfNames[i]}`);
    }
}
show_magicians(["David Copperfield", "Derren Brown", "Penn "]);
const lists = ["x"];
const originalList = ['David Copperfield', 'Derren Brown'];
function make_great() {
    for (let i = 0; i < originalList.length; i++) {
        lists[i] = "Great" + " " + originalList[i];
        console.log(lists[i]);
    }
}
console.log(make_great());
function store_magicians() {
    const greatMagicians = lists;
    console.log(show_magicians(originalList));
    console.log(show_magicians(greatMagicians));
}
store_magicians();
function sandwich(items) {
    items = [`xx`, 'aaa'];
    return `My sandwich has ${items[0]} and ${items[1]}`;
}
console.log(sandwich(["BLT", "Turkey"]));
class Cars {
    constructor(manufacure, model) {
        this.manufacture = manufacure;
        this.model = model;
    }
    getDetails() {
        return `This car is a ${this.model} made by ${this.manufacture}`;
    }
}
const c = new Cars('aaa', 'xx');
console.log(c.getDetails());
let myName = "MAEYDAH MASROOR";
