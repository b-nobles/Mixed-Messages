//Import the arrays from phrases folder
const {quotes, fortunes, activities} = require('./phrases')

//Create the randomizing function that will be reused
getRand = (arr) => Math.floor(Math.random() * arr.length)

//Generate the fortune first
let fortune = `Today's looking: ${fortunes[getRand(fortunes)]}`

//Generate the quote second
let quote = quotes[getRand(quotes)]

//Generate the activity third
let activity = `Maybe try ${activities[getRand(activities)]}`