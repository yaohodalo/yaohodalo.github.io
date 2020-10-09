// 1. Change the content of the div with class "header" to "[Your name]'s Lab 4".
// Ensure that you include the apostrophe. You will need to use a method to get
// access to that div and make changes to the content.

let myName = "Yao Poudima";
const myHeading = document.querySelector('.header');
myHeading.textContent = myName + ' s Lab 4';

// 2.Insert two paragraphs into the div with the class "content"
// Label each paragraph with a distinct class name.

let myFirst = document.createElement('p');
myFirst.className= 'content1';
let mySecond = document.createElement('p');
mySecond.className= 'content2';
document.querySelector('.content').append(myFirst, mySecond);

// 3. Into the first paragraph, insert the phrase "my name has " and the length of your name.
// Your full name should be stored in a variable and the length should be calculated 
//with a built in function. i.e.: "my name has 10 characters "..."Bill Farmer"

myFirst.innerText = 'My name has '+(myName.length-1) + ' characters'+'....'+ myName;

//4. & 5. Into the second paragraph tag, return the 3rd character in your first name
//Capitalize that character:i.e. "the third character in my name is L" (Bill Farmer)

mySecond.innerText = 'The third character of my name is ' + myName.slice(2,3).toUpperCase();

// 6.Add a new line to your second paragraph

mySecond.innerText += '\n';

//7. Return the final three characters of your last name to that new line

mySecond.innerText += myName.slice(myName.length -3);

// 8. Substring your first and last name into two separate variables

let firstName = myName.slice(0,3);
let lastName = myName.slice(4);

// 9. Add the total length of your first and last names together

let total = lastName.length + firstName.length;

//10. Display that total next to your name in your header

myHeading.innerText += " Total lenght of my name is " + total;

