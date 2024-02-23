"use strict";
/*1-Install Node.js, TypeScript and VS Code on your computer.*/
/*Done*/
Object.defineProperty(exports, "__esModule", { value: true });
/*2-Personal Message: Store a person’s name in a variable,
and print a message to that person. Your message should be
simple, such as, “Hello Eric, would you like to learn
some Python today?”
*/
var personalMessage = "Maeydah";
console.log("Hello ".concat(personalMessage, ", would you like to learn \nsome Python today?"));
/*3-Name Cases: Store a person’s name in a variable, and
then print that
person’s name in lowercase, uppercase, and titlecase. */
console.log(personalMessage.toLowerCase()); //lower case
console.log(personalMessage.toUpperCase()); //upper case
console.log(personalMessage.substr(0, 1).toUpperCase() + personalMessage.slice(1)); //title case
/*4-Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following,
including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */
var famousQuotes = "\"A person who never made a mistake never tried anything new.\"";
var famousAuthor = "Albert Einstein";
console.log("".concat(famousQuotes, " - ").concat(famousAuthor));
/*Famous Quote 2: Repeat Exercise 4, but this time store the
famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called
 message. Print your message.*/
/*Done */
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white space*/
var personName = "\tMaeydah\t\n";
console.log("".concat(personName));
console.log("".concat(personName.trim()));
/*Number Eight: Write addition, subtraction, multiplication,
and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
 */
/*You should create four lines that look like this:*/
console.log(16 - 8);
console.log(4 * 2);
console.log(16 / 2);
console.log(4 + 4);
/*9-Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your
favorite number. Print that message.*/
var favouriteNumber = "9";
console.log(favouriteNumber);
/*adding Comments: Choose two of the programs you’ve written,
and add at least one comment to each.
If you don’t have anything specific to write because your
programs are too simple at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does*/
/*Done */
/*11-Names: Store the names of a few of your friends in a array
called names. Print each person’s name by accessing each element
in the list, one at a time.*/
var nameArray = ["maeydah", "Ahmed", "Munim"];
for (var i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}
/*12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them.
 The text of each message should be the same,
 but each message should be personalized with
the person’s name.*/
for (var i = 0; i < nameArray.length; i++) {
    console.log("hi,".concat(nameArray[i]));
}
/*13-Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
var modeOfTransportation = ['motorcylce', "car", "bicycle"];
for (var i = 0; i < modeOfTransportation.length; i++) {
    console.log("i would like to own a honda ".concat(modeOfTransportation[i]));
}
/*14-Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.*/
var guestList = ["Elvis Presley", "Michael Jackson", "The Beatles"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hi ".concat(guestList[i], " i would to invite you for a dinner"));
}
/* 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
var guestWhoCantMakeIt = "Elvis Presley";
var newPerson = "ellen";
guestList = guestList.filter(function (guest) { return guest != guestWhoCantMakeIt; });
guestList.push(newPerson);
for (var i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}
/*16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList, " dear we have found a bigger and are inviting more guest"));
}
guestList.push('ali');
var middleindex = guestList.length / 2;
guestList.splice(middleindex, 0, "Kiran");
console.log(guestList);
guestList.push('dd');
for (var i = 0; i < guestList.length; i++) {
    console.log("hi ".concat(guestList[i]));
}
/*17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
console.log("You can invite only two people for dinner.");
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    if (removedGuests) {
        console.log("Sorry, ".concat(removedGuests, ", I can't invite you to dinner."));
    }
}
console.log("\nInvitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", you're still invited."));
}
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var locations = ["Paris", "Tokyo", "New York", "London", "Berlin"];
//Printing the original list
for (var i = 0; i < locations.length; i++) {
    console.log("Original List :".concat(locations[i], " "));
}
//Sorting the list in alphabetic order
var l1 = locations;
l1.sort();
console.log("\nAlphabetically sorted list: ");
for (var j = 0; j < l1.length; j++) {
    console.log("Sorted List :".concat(l1[j]));
}
for (var i = 0; i < locations.length; i++) {
    console.log("Original List :".concat(locations[i], " "));
}
var locRev = locations;
locRev.sort().reverse();
console.log(locRev);
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
 number of people you are inviting to dinner. */
console.log("Number of people invited to dinner ".concat(guestList.length));
/*
Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.
 */
var mountains = ["abc", "xyz"];
var rivers = ["aa", "bb"];
var countries = ["cc", "dd", "cc"];
var langauges = ["urdu", "english"];
for (var i = 0; i < mountains.length && rivers.length
    && countries.length && langauges.length; i++) {
    console.log("".concat(mountains[i]));
    console.log("".concat(rivers[i]));
    console.log("".concat(countries[i]));
    console.log("".concat(langauges[i]));
}
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
 */
/*done use || in looping leading infinity undeifiend */
/*Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for
the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
var car = 'honda';
console.log("is car ===  'honda' ? I predict false.");
console.log(car === "honda"); //false because it checks both value and type not
var message = 'i recieved';
console.log(message === 'i havent');
var name = 'maeydah';
console.log(name !== 'john'); //true if they are not equal
var number = 2;
console.log(number >= 2);
console.log(4 < 3); // true as 4 is greater than 3
var x = [1, 2, 3];
console.log(x.includes(2)); //returns true as includes method searches an array for
//a specific element returns true if found else false
console.log(!(x.length > 3)); // Logical NOT (!) will return
var pattern = "maeydah";
console.log(name.match(pattern));
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality,
greater than and less than, greater than or equal to,
and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array


 */
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
var number2 = 4;
if (number2 % 2 == 0 && number % 2 == 0) {
    console.log(' both even');
}
if (number % 2 == 0 || number % 2 == 0) {
    console.log('one is even');
}
/*lien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color
and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color
is green. If it is,
print a message that the player just earned 5 points.
 */
var alien_color = 'green';
if (alien_color === 'green') {
    console.log('you have earn 5 points');
}
/*lien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
 */
else {
    console.log('you have 10 points');
}
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
if (alien_color == 'green') {
    console.log('5 points');
}
else if (alien_color == 'yellow') {
    console.log('10 points');
}
else if (alien_color == 'red') {
    console.log('15 points');
}
/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder
*/
var person = 2;
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
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
 such as You really like bananas!*/
var favorite_fruits = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('banana')) {
    console.log('you really like banana');
}
else if (favorite_fruits.includes('orange')) {
    console.log('You really like orange');
}
console.log("Here are " + favorite_fruits + "are my favorite fruits");
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after
they log in to a website. Loop through the array, and print a
 greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */
var users = ['Eric', 'admin'];
for (var i = 0; i < users.length; i++) {
    if (users[i] === 'admin') {
        console.log("".concat(users[i], " would you like to see special report"));
    }
    else {
        console.log(" hello ".concat(users[i], " , thank you for logging in again"));
    }
}
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
for (var i = 0; i <= users.length; i++) {
    users.pop();
}
console.log(users.length);
if (users.length === 0) {
    console.log('we need to add users');
}
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
var current_users = ['John', 'john', 'Jane', 'Jack', 'jack'];
var new_user = 'Mike';
if (!current_users.includes(new_user)) {
    current_users.push(new_user);
    console.log("".concat(new_user, " added successfully"));
}
else {
    console.log("Sorry ".concat(new_user, ", already exists."));
}
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 */
var pizza = ['pepperoni', 'mushrooms', 'onions', 'green peppers'];
for (var i = 0; i < pizza.length; i++) {
    if (pizza[i] === "onions") {
        console.log(" i really like ".concat(pizza[i], "\n"));
    }
}
console.log('i like pizza');
/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. •
 Modify your program to print a statement about each animal, such as A dog would make a great pet. •
 Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

 */
var animals = ["dog", "cat", "fish"];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
/*T-Shirt: Write a function called make_shirt()
 that accepts a size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the shirt
 and the message printed on it. Call the function.*/
function make_shirt(message, size) {
    var sizes = ["Small", "Medium", "Large"];
    return "Your t-shirt is ".concat(sizes[size - 1], " with \"").concat(message);
}
console.log(make_shirt("Learning JavaScript is Fun!", 3));
/*
Large Shirts: Modify the make_shirt() function
so that shirts are large by default with a message that
reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and a shirt of any size with a different message.
 */
function make_shirt1(message, size) {
    var sizes = ["small", "medium", "large"];
    var defSize = 2; //default size is Medium
    var defMessage = "I love TypeScript";
    if (!size) {
        size = defSize;
    }
    else if (size > 3 || size < 1) {
        throw new Error("Invalid Size");
    }
    if (!message) {
        message = defMessage;
    }
    return "".concat(sizes[size - 1], ", here's what's on my ch");
}
console.log(make_shirt1("ccc", 1));
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function describe_city(cityCountryPair) {
    var citiesCountries = [
        "Lahore,Pakistan",
        "Tokyo,Japan",
        "New,USA"
    ];
    for (var i in citiesCountries) {
        if (citiesCountries[i].includes(cityCountryPair)) {
            return "\"".concat(cityCountryPair, "\" is ").concat(citiesCountries[i], ".");
        }
    }
    return "";
}
;
console.log(describe_city("Lahore,Pakistan"));
/*
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing
different albums. Print each return value to show that
Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artistname, albumtitle) {
    var album = {};
    album["Artist Name"] = artistname;
    album["Album Title"] = albumtitle;
    return album;
}
console.log(make_album("Michael Jackson", "Thriller"));
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
var magicNames = ["David Copperfield", "Dave McLean", "Derren Brown"];
function show_magicians(arrayOfNames) {
    for (var i = 0; i < magicNames.length; i++) {
        console.log("Showing Magician: ".concat(arrayOfNames[i]));
    }
}
show_magicians(["David Copperfield", "Derren Brown", "Penn "]);
/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.
*/
var lists = ["x"];
var originalList = ['David Copperfield', 'Derren Brown'];
function make_great() {
    for (var i = 0; i < originalList.length; i++) {
        lists[i] = "Great" + " " + originalList[i];
        console.log(lists[i]);
    }
}
console.log(make_great());
/*
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the
array of magicians’ names. Because the original array will be
 unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one
 array of the original names and one array with the Great
 added to each magician’s name.
*/
function store_magicians() {
    var greatMagicians = lists; //creates a shallow copy of list
    console.log(show_magicians(originalList));
    console.log(show_magicians(greatMagicians));
}
store_magicians();
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function sandwich(items) {
    items = ["xx", 'aaa'];
    return "My sandwich has ".concat(items[0], " and ").concat(items[1]);
}
console.log(sandwich(["BLT", "Turkey"]));
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
var Cars = /** @class */ (function () {
    function Cars(manufacure, model) {
        this.manufacture = manufacure;
        this.model = model;
    }
    Cars.prototype.getDetails = function () {
        return "This car is a ".concat(this.model, " made by ").concat(this.manufacture);
    };
    return Cars;
}());
var c = new Cars('aaa', 'xx');
console.log(c.getDetails());
