//object that holds player name and score
const player = {
    name: null,
    score: 0,
    questionsAnswered: 0
}
// wind condition (70% of total possible points)
let pointsNeededToWin = 17850
//object that stores questions, their answers, and their point values
const questions = {
    roundOne: {
        category1: {
            categoryName: "State Capitals",
            question100: {
                question: "This major city, formerly known as \"Terminus\", is the capital of Georgia",
                whatorWho: "What",
                answer: "Atlanta",
                points: 100,
                choices: ["Atlanta", "Macon", "Columbus", "Athens"]
            },
            question200: {
                question: "Located on the west bank of the Hudson River, this upstate city is the capital of New York",
                whatorWho: "What",
                answer: "Albany",
                points: 200,
                choices: ["Albany", "Manhattan", "Schenectady", "Hoosick"]
            },
            question300: {
                question: "This capital city of Maryland is also home to the US Naval Academy",
                whatorWho: "What",
                answer: "Annapolis",
                points: 300,
                choices: ["Annapolis", "Baltimore", "Potomac", "Bethesda"]
            },
            question400: {
                question: "Believe it or not, this city has been the capital of Oregon since 1857",
                whatorWho: "What",
                answer: "Salem",
                points: 400,
                choices: ["Salem", "Portland", "Eugene", "Bend"]
            },
            question500: {
                question: "This city is the capital of Missouri, despite being it's 15th most populous city",
                whatorWho: "What",
                answer: "Jefferson City",
                points: 500,
                choices: ["Jefferson City", "Joplin", "Kansas City", "Springfield"]
            }
        },
        category2: {
            categoryName: "Who Said It?",
            question100: {
                question: "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"",
                whatorWho: "Who",
                answer: "Benjamin Franklin",
                points: 100,
                choices: ["Benjamin Franklin", "Albert Einstein", "Neil DeGrasse Tyson", "Carl Sagan"]
            },
            question200: {
                question: "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\"",
                whatorWho: "Who",
                answer: "Aristotle",
                points: 200,
                choices: ["Aristotle", "Will Durant", "Phil Knight", "Carson Daly"]
            },
            question300: {
                question: "\"All music is folk music; I ain't never heard no horse sing a song.\"",
                whatorWho: "Who",
                answer: "Louis Armstrong",
                points: 300,
                choices: ["Louis Armstrong", "Neil Young", "Bob Dylan", "Jackson Browne"]
            },
            question400: {
                question: "\"Create havoc, create destruction.\"",
                whatorWho: "Who",
                answer: "Dennis Rodman",
                points: 400,
                choices: ["Dennis Rodman", "Chuck Palahniuk", "The Joker", "John Zerzan"]
            },
            question500: {
                question: "\"What do I care about the purring of one who cannot love, like the cat?\"",
                whatorWho: "Who",
                answer: "Friedrich Nietzsche",
                points: 500,
                choices: ["Friedrich Nietzsche", "Franz Kafka", "Charles Bukowski", "Edgar Allan Poe"]
            }
        },
        category3: {
            categoryName: "Web Development",
            question100: {
                question: "This language is used to render the raw content on a webpage",
                whatorWho: "What",
                answer: "HTML",
                points: 100,
                choices: ["HTML", "CSS", "JavaScript", "Spanish"]
            },
            question200: {
                question: "An HTML class may apply to multiple elements but this can only be used once.",
                whatorWho: "What",
                answer: "ID",
                points: 200,
                choices: ["ID", "href", "src", "attribute"]
            },
            question300: {
                question: "This is used to perform multiple iterations for the same block of code",
                whatorWho: "What",
                answer: "Loop",
                points: 300,
                choices: ["Loop", "Variable", "Function", "Method"]
            },
            question400: {
                question: "This is a datatype that can only represent one of two values",
                whatorWho: "What",
                answer: "Boolean",
                points: 400,
                choices: ["Boolean", "Object", "Array", "String"]
            },
            question500: {
                question: "jQuery is an example of this",
                whatorWho: "What",
                answer: "Library",
                points: 500,
                choices: ["Library", "Datatype", "Programming Language", "Function"]
            }
        },
        category4: {
            categoryName: "Literature",
            question100: {
                question: "\"Call me Ishamel!\" is the opening line of this classic book",
                whatorWho: "What",
                answer: "Moby Dick",
                points: 100,
                choices: ["Moby Dick", "The Old Man and the Sea", "The Great Gatsby", "The Sound and the Fury"]
            },
            question200: {
                question: "This author's famous response to write a 6-word story was \"For sale baby shoes never worn\"",
                whatorWho: "Who",
                answer: "Ernest Hemingway",
                points: 200,
                choices: ["Ernest Hemingway", "Ralph Waldo Emerson", "Truman Capote", "Harper Lee"]
            },
            question300: {
                question: "This Russian author is best known for his books \"Crime and Punishment\" and \"The Brothers Karamazov\"",
                whatorWho: "Who",
                answer: "Fyodor Dostoevsky",
                points: 300,
                choices: ["Fyodor Dostoevsky", "Leo Tolstoy", "Vladimir Nabakov", "Alexander Pushkin"]
            },
            question400: {
                question: "\"Infinite Jest\" is the seminal work of this late postmodern author",
                whatorWho: "Who",
                answer: "David Foster Wallace",
                points: 400,
                choices: ["David Foster Wallace", "Kathy Acker", "Don DeLillo", "Thomas Pynchon"]
            },
            question500: {
                question: "\"The Unbearable Lightness of Being\" was authored by this existential Czech writer",
                whatorWho: "Who",
                answer: "Milan Kundera",
                points: 500,
                choices: ["Milan Kundera", "Nikolai Gogol", "Anton Chechov", "Josef Škvorecký"]
            }
        },
        category5: {
            categoryName: "The Periodic Table",
            question100: {
                question: "Atomic No. 82 it was used by Romans for water pipes though known in Augustus Caesar's time to cause poisoning",
                whatorWho: "What",
                answer: "Lead",
                points: 100,
                choices: ["Lead", "Bismuth", "Iridium", "Unobtainium"]
            },
            question200: {
                question: "Back in 1772 Swedish chemist Carl Scheele called this most plentiful gas in our atmosphere foul air",
                whatorWho: "What",
                answer: "Nitrogen",
                points: 200,
                choices: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"]
            },
            question300: {
                question: "The 3 naturally occurring magnetic elements are cobalt nickel & this one",
                whatorWho: "What",
                answer: "Iron",
                points: 300,
                choices: ["Iron", "Steel", "Aluminum", "Magnesium"]
            },
            question400: {
                question: "This element that burns with a suffocating odor is also known as brimstone",
                whatorWho: "What",
                answer: "Sulfur",
                points: 400,
                choices: ["Sulfur", "Calcium", "Phosphorous", "Carbon"]
            },
            question500: {
                question: "This element is the most abundant in the universe, making up about 3/4 of all matter",
                whatorWho: "What",
                answer: "Hydrogen",
                points: 500,
                choices: ["Hydrogen", "Carbon", "Oxygen", "Iron"]
            }
        }
    },
    roundTwo: {
        category1: {
            categoryName: "Foreign Films",
            question200: {
                question: "Clint Eastwood's Unforgiven is partly dedicated to this man who directed Clint in The Good the Bad and the Ugly",
                whatorWho: "Who",
                answer: "Sergio Leone",
                points: 200,
                choices: ["Sergio Leone", "Tonino Valerii", "Sergio Corbucci", "Franco Nero"]
            },
            question400: {
                question: "This French romantic comedy stars Audrey Tautou as a waitress in Montmartre, Paris",
                whatorWho: "What",
                answer: "Amelie",
                points: 400,
                choices: ["Amelie", "Les Émotifs Anonymes", "Populaire", "Un homme à la hauteur"]
            },
            question600: {
                question: "In this 1957 Swedish film Max van Sydow's character plays a game of chess with Death",
                whatorWho: "What",
                answer: "The Seventh Seal",
                points: 600,
                choices: ["The Seventh Seal", "Wild Strawberries", "The New Land", "You, The Living"]
            },
            question800: {
                question: "In this 1963 Italian film Frederico Fellini creates a surreal interpretation of artist's block which is plaguing a famous film director",
                whatorWho: "What",
                answer: "8 1/2",
                points: 800,
                choices: ["8 1/2", "La Strada", "Satyricon", "La Dolce Vita"]
            },
            question1000: {
                question: "Of this 1965 film, director Jean-Luc Godard said, \"It is not really a film, it's an attempt at cinema\"",
                whatorWho: "What",
                answer: "Pierrot Le Fou",
                points: 1000,
                choices: ["Pierrot Le Fou", "Breathless", "Masculin Féminin", "Contempt"]
            }
        },
        category2: {
            categoryName: "Potpourri",
            question200: {
                question: "This Microsoft program was originally called presenter",
                whatorWho: "What",
                answer: "PowerPoint",
                points: 200,
                choices: ["PowerPoint", "Excel", "Outlook", "Word"]
            },
            question400: {
                question: "Shaped like a bow tie this pasta has a name that means butterflies in Italian",
                whatorWho: "What",
                answer: "Farfalle",
                points: 400,
                choices: ["Farfalle", "Tagliatelle", "Pappardelle", "Orecchiette"]
            },
            question600: {
                question: "AKA ascorbic acid this vitamin helps form collagen in bones & aids in the absorption of iron",
                whatorWho: "What",
                answer: "Vitamin C",
                points: 600,
                choices: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin B12"]
            },
            question800: {
                question: "This king of Ancient Egypt's 19th dynasty was known for his extensive building programs",
                whatorWho: "Who",
                answer: "Ramses",
                points: 800,
                choices: ["Ramses", "Tutankhamun", "Amenhotep", "Hatshepsut"]
            },
            question1000: {
                question: "The innermost of Jupiter's 4 Galilean moons",
                whatorWho: "What",
                answer: "Io",
                points: 1000,
                choices: ["Io", "Europa", "Ganymede", "Callisto"]
            }
        },
        category3: {
            categoryName: "Sitcoms",
            question200: {
                question: "Family Matters was a spinoff of this sitcom that aired from 1986-1993",
                whatorWho: "What",
                answer: "Perfect Strangers",
                points: 200,
                choices: ["Perfect Strangers", "Happy Days", "Charles in Charge", "Full House"]
            },
            question400: {
                question: "Home Improvement took place in this midwest city",
                whatorWho: "What",
                answer: "Detroit",
                points: 400,
                choices: ["Detroit", "Chicago", "St. Louis", "Cleveland"]
            },
            question600: {
                question: "With a 60.2 rating the finale of this sitcom is the highest-rated TV episode of all time",
                whatorWho: "What",
                answer: "M*A*S*H*",
                points: 600,
                choices: ["M*A*S*H*", "Friends", "Full House", "Seinfeld"]
            },
            question800: {
                question: "On Seinfeld he said You know I always wanted to pretend that I was an architect",
                whatorWho: "Who",
                answer: "George",
                points: 800,
                choices: ["George", "Kramer", "Jerry", "Newman"]
            },
            question1000: {
                question: "In the Friends episode \"The One With All The Wedding Dresses\" Monica lines up early for a sale at this bridal store",
                whatorWho: "What",
                answer: "Kleinman's",
                points: 1000,
                choices: ["Kleinman's", "David's", "L'Fay", "Carol Hannah"]
            }
        },
        category4: {
            categoryName: "Professional Wrestling",
            question200: {
                question: "This wrestler's iconic catchphrase was \"Say hello to the bad guy\"",
                whatorWho: "Who",
                answer: "Razor Ramon",
                points: 200,
                choices: ["Razor Ramon", "Triple H", "Undertaker", "Rey Mysterio"]
            },
            question400: {
                question: "This wrestler turned heel and changed sides at the 1996 Bash At The Beach",
                whatorWho: "Who",
                answer: "Hulk Hogan",
                points: 400,
                choices: ["Hulk Hogan", "Lex Luger", "Sting", "Randy Savage"]
            },
            question600: {
                question: "Before Hulk Hogan and Andre the Giant there was this handsome lord of the ring, the pioneer of the wrestling gimmick",
                whatorWho: "Who",
                answer: "Gorgeous George",
                points: 600,
                choices: ["Gorgeous George", "Buddy Rogers", "Antonio Rocca", "Freddie Blassie"]
            },
            question800: {
                question: "The father of this wrestler was the NWA World Light Heavyweight champion in 1960 and 1963",
                whatorWho: "Who",
                answer: "Chavo Guerrerro Sr.",
                points: 800,
                choices: ["Chavo Guerrerro Sr.", "Chavo Guerrerro Jr.", "Jake \"The Snake\" Roberts", "Dusty Rhodes"]
            },
            question1000: {
                question: "\"Stone Cold\" Steve Austin helped usher in this era in WWE in 1997",
                whatorWho: "What",
                answer: "The Attitude Era",
                points: 1000,
                choices: ["The Attitude Era", "The Golden Era", "The New Generation Era", "The PG Era"]
            }
        },
        category5: {
            categoryName: "Philosophy",
            question200: {
                question: "This man, one of the Seven Sages of Greece, was regarded by Aristotle as the first philosopher",
                whatorWho: "Who",
                answer: "Thales",
                points: 200,
                choices: ["Thales", "Socrates", "Plato", "Pythagoras"]
            },
            question400: {
                question: "This philosopher said, \"I think, therefore I am.\"",
                whatorWho: "Who",
                answer: "René Descartes",
                points: 400,
                choices: ["René Descartes", "Blaise Pascal", "Emmanuel Kant", "Voltaire"]
            },
            question600: {
                question: "This philosopher is credited with being the first existentialist",
                whatorWho: "Who",
                answer: "Søren Kierkegaard",
                points: 600,
                choices: ["Søren Kierkegaard", "Jean-Paul Sartre", "Martin Heidegger", "Albert Camus"]
            },
            question800: {
                question: "This analytic philosopher specializing in language only published one work in his lifetime, however another was released 31 years later, after his death",
                whatorWho: "Who",
                answer: "Ludwig Wittgenstein",
                points: 800,
                choices: ["Ludwig Wittgenstein", "G.E. Moore", "Bertrand Russell", "Hilary Putnam"]
            },
            question1000: {
                question: "This philosopher is credited for laying the framework for the school of structuralism with his \"Superstructure\" theory",
                whatorWho: "Who",
                answer: "Karl Marx",
                points: 1000,
                choices: ["Karl Marx", "Georg Hegel", "Arthur Schopenhauer", "Baruch Spinoza"]
            }
        }
    }
}
const finalQuestion = {
    roundOne: {
        question: "Pittsburgh's three rivers are the Allegheny, Monongahela, and ",
        whatorWho: "What",
        answer: "ohio",
        points: 1000
    },
    roundTwo: {
        question: "A knee-length boot is named for Arthur first duke of this",
        whatorWho: "What",
        answer: "wellington",
        points: 2000
    }
}

//create welcome screen
function createWelcomeScreen() {
    let $welcome = $(`<div class="welcome-screen"><h1>Welcome to Jeopardy</h1> <h3>Let's Get Started</h3> <p>What's Your Name?</p> <input type="text" id="player-name-input" placeholder="Your Name">
    <button id="start-button" class="btn btn-success">Start</button></div>`)
    $('header').after($welcome)
    $('#start-button').on('click', function() {
        if(document.querySelector('#player-name-input').value !== "") {
            createPlayer()
            $welcome.addClass('hidden')
            $('.game-board').removeClass('hidden')
            createBoard('roundOne', 100)
        } else {
            swal.fire({type: 'error', text: 'Please enter your name'})
        }
    })
}

//function that stores player name and starts point count
function createPlayer() {
    player.name = $('#player-name-input').val()
    $('#player-name-display').html(player.name)
    $('#player-score-display').html(player.score)
}

//function that makes the row indicating the categories for the round
function buildCategoryRow(roundNumber) {
    for (category in questions[roundNumber]) {
        let categoriesObject = questions[roundNumber][category]
        let $div = $('<div class="category"></div>')
        $div.text(categoriesObject.categoryName)
        $('.game-board').append($div)
    }
}
// function that builds each row in the game board grid
function buildRow(roundNumber, points) {
    for (category in questions[roundNumber]) {
            let questionObject = questions[roundNumber][category][`question${points}`]
            let $button = $('<button></button>')
            $button.html(`<p>${questionObject.points}</p>`)
            $button.addClass(`${category} question`)
            $button.on('click', function() {
                let questionScreen = $('.question-screen')
                questionScreen.html(`<h2>${questionObject.question}</h2> \n <p>${questionObject.whatorWho} is...</p>`)
                let $choicesDiv = $('<div class="choices"></div>')
                questionScreen.append($choicesDiv)
                //running the shuffle function on the array of choices so the order of the answer buttons is randomized each time
                shuffle(questionObject.choices).forEach((choice) => {
                    let $choice = $(`<button>${choice}</button>`)
                    $choicesDiv.append($choice)
                    $choice.on('click', function() {
                        if (choice == questionObject.answer) {
                            swal.fire({type: 'success', text: `That is correct! ${questionObject.points} points have been added to your total`})
                            player.score += questionObject.points
                            $('#player-score-display').html(player.score)
                        } else {
                            swal.fire({type: 'error', text: 'That is incorrect'})
                        }
                        questionScreen.addClass('hidden')
                        $('.game-board').removeClass('hidden')
                        if (player.questionsAnswered === 25 || player.questionsAnswered === 51) {
                            setTimeout(function() { swal.fire("It's time for the final question!")}, 1500)
                        }
                    })
                })
                $('.game-board').addClass('hidden')
                questionScreen.removeClass('hidden')
                $button.css('z-index', -1)
                player.questionsAnswered ++
                if (player.questionsAnswered === 25 || player.questionsAnswered === 51)
                revealFinalQuestion()
            })
            $('.game-board').append($button)
    }
}
//function that creates the cell for the final question for each round
function makeFinalQuestionCell(roundNumber) {
    let finalQuestionObject = finalQuestion[roundNumber]
    let $final = $('<button class="final"></button>')
    $final.text("Final Question")
    $final.on('click', function() {
        let questionScreen = $('.question-screen')
        questionScreen.html(`<h2>${finalQuestionObject.question}</h2> \n <p>${finalQuestionObject.whatorWho} is...</p> \n <input class="final-input"> <button class="final-submit btn btn-success">Submit</button>`)
        $('.final-submit').on('click', function() {
            let input = document.querySelector('.final-input').value.toLowerCase()
            if (input == finalQuestionObject.answer.toLowerCase()) {
                swal.fire({type: 'success', text: `That is correct! ${finalQuestionObject.points} points have been added to your total`})
                player.score += finalQuestionObject.points
                $('#player-score-display').html(player.score)
            } else {
                swal.fire({type: 'error', text: 'Sorry, that is incorrect'})
            }
            player.questionsAnswered ++
            questionScreen.addClass('hidden')
            $('.game-board').removeClass('hidden')
            $('.game-board').empty()
            if (player.questionsAnswered === 26) {
                createBoard('roundTwo', 200)
            } else if (player.questionsAnswered === 52) {
                $('.game-board').addClass('hidden')
                let winLoseScreen = $('.win-lose')
                if (player.score >= pointsNeededToWin) {
                    winLoseScreen.html(`<div class="win-lose-image"><img class="alex" src="images/jp_s33_cast_alex_0.jpg" alt="alex trebek"></div><div class="win-lose-message"><h2>WINNER!</h2> \n <h3>Congratulations ${player.name}! You have won $${player.score}.</h3> \n <button class="play-again btn btn-success" onClick="window.location.reload()">Play Again?</button></div>`)
                } else {
                    winLoseScreen.html(`<div class="win-lost-image"><img class="alex" src="images/jp_s33_cast_alex_0.jpg" alt="alex trebek"></div><div class="win-lose-message"><h2>Not a Winner</h2> \n <h3>Sorry ${player.name}, you didn't score enough points</h3> \n <button class="play-again btn btn-success" onClick="window.location.reload()">Play Again</button></div>`)
                }
                winLoseScreen.removeClass('hidden')
            }
        })
        $('.game-board').addClass('hidden')
        questionScreen.removeClass('hidden')
    })
    $('.game-board').append($final)
}
// function that creates game board
function createBoard(roundNumber, minPoints) {
    if (player.questionsAnswered === 0) {
        let $gameBoard = $('<div class="game-board hidden"></div>')
        $('.welcome-screen').after($gameBoard)
    }
    $('.game-board').removeClass('hidden')
    buildCategoryRow(roundNumber)
        for (let i = minPoints; i <= (minPoints * 5); i += minPoints) {
            buildRow(roundNumber, i)
        }
        makeFinalQuestionCell(roundNumber)
}

//function that reveals the final question
function revealFinalQuestion() {
    if (player.questionsAnswered === 25 || player.questionsAnswered === 51) {
        $('.final').css('z-index', 1)
    } 
}

//function that shuffles the contents of an array (from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

createWelcomeScreen()
