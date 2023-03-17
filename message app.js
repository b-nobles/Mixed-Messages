//Initialize variables
const fortunes = ['Good', 'Great', 'Bleak', 'Amazing', 'Mediocre', 'Average', 'Boring', 'Exciting', 'Bad']
const quotes = ["Nothing is impossible. The word itself says 'I'm possible!'", "There is nothing impossible to they who will try.", "The bad news is time flies. The good news is you're the pilot.", "Life has got all those twists and turns. You've got to hold on tight and off you go.", "Keep your face always toward the sunshine, and shadows will fall behind you.", "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "You define your own life. Don't let other people write your script.", "You are never too old to set another goal or to dream a new dream.", "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.", "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.", "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.", "It is during our darkest moments that we must focus to see the light.", "Believe you can and you're halfway there.", "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.", "We must let go of the life we have planned, so as to accept the one that is waiting for us.", "Real change, enduring change, happens one step at a time.", "Wake up determined, go to bed satisfied.", "Life is like riding a bicycle. To keep your balance, you must keep moving."]
const activities = ['getting some fresh air!', 'winding down tonight with a nice book!', 'a new recipe!', 'learning something new!', 'getting some chores done early!', "naming something you're thankful for!", 'taking it easy!']
//Create the randomizing function that will be reused
const getRand = (arr) => Math.floor(Math.random() * arr.length);
let quoteVal = getRand(quotes);
let fortuneVal = getRand(fortunes);
let activityVal = getRand(activities);
//Output a message to the console
console.log(`Today's looking: ${fortunes[fortuneVal]} - Here's an inspirational quote: "${quotes[quoteVal]}" - Maybe try ${activities[activityVal]}`)