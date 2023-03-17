//Import the arrays from phrases folder
import {quotes, fortunes, activities} from '/phrases.js'

//Access HTML objects to manipulate
const quoteText = document.getElementById('quote');
const fortuneText = document.getElementById('fortune');
const activityText = document.getElementById('activity')
const resetBtn = document.getElementById('reset')

//Create the randomizing function that will be reused
const getRand = (arr) => Math.floor(Math.random() * arr.length)

//Initialize variables that will that are temporary but can be reused
let quoteVal = '';
let fortuneVal = '';
let activityVal = '';

//Create function that will change website text appropriately
function updateVars() {
    //Generate the fortune first
    fortuneText.innerHTML = fortunes[fortuneVal].word
    //Give the fortune an appropriate color
    fortuneText.style.color = fortunes[fortuneVal].color
    //Generate the quote second
    quoteText.innerHTML = quotes[quoteVal]
    //Generate the activity third
    activityText.innerHTML = `Maybe try ${activities[activityVal]}`
}

//Create reusable function to assign values and then upate text
function assignVars() {
    quoteVal = getRand(quotes);
    fortuneVal = getRand(fortunes);
    activityVal = getRand(activities);
    updateVars();
    console.log(`Today's looking: ${fortunes[fortuneVal].word} - Here's an inspirational quote: "${quotes[quoteVal]}" - Maybe try ${activities[activityVal]}`)
}

//Call assignVars to have starting value
assignVars();

//Update the values to change page text
resetBtn.addEventListener('click', assignVars)