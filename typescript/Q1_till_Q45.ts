/*1-Install Node.js, TypeScript and VS Code on your computer.*/
/*Done*/

import { count } from "console";

/*2-Personal Message: Store a person’s name in a variable, 
and print a message to that person. Your message should be 
simple, such as, “Hello Eric, would you like to learn 
some Python today?”
*/
let personalMessage = "Maeydah";
console.log(`Hello ${personalMessage}, would you like to learn 
some Python today?`)
/*3-Name Cases: Store a person’s name in a variable, and 
then print that
person’s name in lowercase, uppercase, and titlecase. */
console.log(personalMessage.toLowerCase()); //lower case
console.log(personalMessage.toUpperCase());//upper case
console.log(personalMessage.substr(0, 1).toUpperCase() + personalMessage.slice(1));//title case
/*4-Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, 
including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */
let famousQuotes = `"A person who never made a mistake never tried anything new."`;
let famousAuthor = "Albert Einstein"
console.log(`${famousQuotes} - ${famousAuthor}`);
/*Famous Quote 2: Repeat Exercise 4, but this time store the
famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called
 message. Print your message.*/
/*Done */
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white space*/
let personName = "\tMaeydah\t\n";
console.log(`${personName}`);
console.log(`${personName.trim()}`)
/*Number Eight: Write addition, subtraction, multiplication,
and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
 */
/*You should create four lines that look like this:*/
console.log(16-8);
console.log(4*2);
console.log(16/2);
console.log(4+4);

/*9-Favorite Number: Store your favorite number in a variable. 
Then, using that variable, create a message that reveals your
favorite number. Print that message.*/
let favouriteNumber = "9";
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
let nameArray=["maeydah","Ahmed","Munim"];
for(let i = 0 ; i < nameArray.length ; i++){
    console.log(nameArray[i]);
}
/*12-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. 
 The text of each message should be the same, 
 but each message should be personalized with
the person’s name.*/
for(let i = 0 ; i< nameArray.length;i++){
    console.log(`hi,${nameArray[i]}`);
}
/*13-Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”*/
let modeOfTransportation = ['motorcylce',"car","bicycle"];
for (let i = 0 ; i < modeOfTransportation.length; i++){
    console.log(`i would like to own a honda ${modeOfTransportation[i]}`);
}

/*14-Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
inviting them to dinner.*/
let guestList = ["Elvis Presley", "Michael Jackson", "The Beatles"];
for(let i = 0 ; i < guestList.length; i++){
    console.log(`Hi ${guestList[i]} i would to invite you for a dinner`);
}
/* 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
let guestWhoCantMakeIt = "Elvis Presley";
let newPerson = "ellen";
guestList = guestList.filter(guest=>guest != guestWhoCantMakeIt);
guestList.push(newPerson);   
for (let i = 0 ; i < guestList.length ; i++){
    console.log(guestList[i]);
}
/*16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/
for(let i = 0 ; i < guestList.length ; i++){ 
    console.log(`${guestList} dear we have found a bigger and are inviting more guest`);
}
guestList.push('ali');
let middleindex = guestList.length / 2 ; 
guestList.splice(middleindex,0,"Kiran");
console.log(guestList);
guestList.push('dd')
for (let i = 0 ; i < guestList.length ; i++){
console.log(`hi ${guestList[i]}`);
}
/*17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
console.log("You can invite only two people for dinner.");

while (guestList.length > 2) {
    const removedGuests = guestList.pop();
    if (removedGuests) {
        console.log(`Sorry, ${removedGuests}, I can't invite you to dinner.`);
    }
}

console.log("\nInvitations:");

for (let i = 0 ;  i < guestList.length ; i++) {
    console.log(`${guestList[i]}, you're still invited.`);
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
let locations=[ "Paris", "Tokyo","New York","London","Berlin"];
//Printing the original list
for(let i = 0 ; i < locations.length; i++){
console.log(`Original List :${locations[i]} `);
}
//Sorting the list in alphabetic order
let l1 = locations;
l1.sort();
console.log( "\nAlphabetically sorted list: ");
for(let j=0;j<l1.length;j++){
    console.log(`Sorted List :${l1[j]}`);
}
for(let i = 0 ; i < locations.length; i++){
    console.log(`Original List :${locations[i]} `);
}
let locRev = locations;
locRev.sort().reverse();
console.log(locRev);
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
 number of people you are inviting to dinner. */
console.log(`Number of people invited to dinner ${guestList.length}`)
/*
Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items.
 */
let mountains=["abc","xyz"];
let rivers =["aa","bb"];
let countries = ["cc","dd","cc"];
let langauges=["urdu","english"]
for(let i = 0 ; i<mountains.length && rivers.length
    && countries.length && langauges.length;i++) {
        console.log(`${mountains[i]}`);
        console.log(`${rivers[i]}`);
        console.log(`${countries[i]}`);
        console.log(`${langauges[i]}`)
}
/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
 */
interface objects {
    mountains:string[],
    rivers: string[],
    countries: string[] ,
    languages: string[]
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
let car = 'honda';
console.log("is car ===  'honda' ? I predict false.");
console.log(car=== "honda"); //false because it checks both value and type not
let message = 'i recieved';
console.log(message === 'i havent');
let name = 'maeydah';
console.log(name !== 'john');//true if they are not equal
let number = 2;
console.log(number>=2);
console.log(4<3) ;// true as 4 is greater than 3
let x = [1,2,3];
console.log(x.includes(2)); //returns true as includes method searches an array for
//a specific element returns true if found else false
console.log(!(x.length > 3)) // Logical NOT (!) will return
let pattern = `\maeydah`;
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
if (car==='honda' && message!=='i havent received anything yet' ) { console.log('True')}
car.toUpperCase();
if (car.toLowerCase()){
    console.log('true')
}
else{
    console.log('false')
}
if(number<2){
    console.log('number less than 2');
}
else if(number>2){
    console.log('number greater than 2');
}
else if(number===2){
    console.log('number equal');
}
else if(number<=2){
    console.log('greater than equal 2');
}
else if(number>=2){
    console.log('number equal 2')
}
let number2 = 4;
if(number2%2==0&&number%2==0){
    console.log(' both even');
}
if(number%2==0 || number%2==0){
    console.log('one is even');
}
/*lien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color 
and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color 
is green. If it is, 
print a message that the player just earned 5 points.
 */
let alien_color='green';
if(alien_color === 'green'){
    console.log('you have earn 5 points');
}
/*lien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
 */
else{
    console.log('you have 10 points');
}
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
if(alien_color=='green'){
    console.log('5 points');
}
else if(alien_color=='yellow'){
    console.log('10 points')
}
else if ( alien_color== 'red'){
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
let person = 2;
if(person<2){
    console.log('baby');
}
if(person>=2 && person<=4){
    console.log('toddler');
}
else if(person>=4 && person <=13) {
    console.log('kid');
}
else if (person>=13&&person<=20){
    console.log('teenager');
}
else if (person>=20&&person<=65){
    console.log('adults')
}
else{
    console.log('elder');
}
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
 such as You really like bananas!*/