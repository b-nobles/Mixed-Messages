//Import the arrays from phrases folder
import {quotes, fortunes, activities} from '/phrases.js'

//Access HTML objects to manipulate
const quoteText = document.getElementById('quote');
const fortuneText = document.getElementById('fortune');
const activityText = document.getElementById('activity')

//Create the randomizing function that will be reused
const getRand = (arr) => Math.floor(Math.random() * arr.length)

//Initialize variables that will that are temporary but can be reused
let quoteVal = getRand(quotes);
let fortuneVal = getRand(fortunes);
let activityVal = getRand(activities);

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

updateVars();