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
