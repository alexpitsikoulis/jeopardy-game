//object that holds player name and score
const player = {
    name: null,
    score: 0,
    questionsAnswered: 0
}
//object that stores questions, their answers, and their point values
const questions = {
    roundOne: {
        category1: {
            categoryName: "Geography",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category2: {
            categoryName: "Who Said It?",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category3: {
            categoryName: "Web Development",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category4: {
            categoryName: "Classic Literature",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category5: {
            categoryName: "The Periodic Table",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        }
    },
    roundTwo: {
        category1: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category2: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category3: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category4: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        },
        category5: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800,
                choices: ["answer", "not answer", "not answer", "not answer"]
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000,
                choices: ["answer", "not answer", "not answer", "not answer"]
            }
        }
    }
}
const finalQuestion = {
    roundOne: {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
        answer: "answer",
        points: 1000
    },
    roundTwo: {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
        answer: "answer",
        points: 2000
    }
}
//event listener on start button that saves player name hides welcome screen and creates the game board
$('#start-button').on('click', function() {
    if(document.querySelector('#player-name-input').value !== "") {
        createPlayer()
        $('.welcome-screen').addClass('hidden')
        $('.game-board').toggleClass('game-board-live')
        createBoard('roundOne', 100)
    } else {
        alert('Please enter your name')
    }
})

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
            let $div = $('<div></div>')
            let $answered = $('<div class="answered"></div>')
            $answered.css('z-index', 2)
            $div.html(`<p>${questionObject.points}</p>`)
            $div.addClass(`${category} question`)
            $div.on('click', function() {
                let questionScreen = $('.question-screen')
                questionScreen.html(`<h2>${questionObject.question}</h2> \n <h6>What is...</h6>`)
                let $choicesDiv = $('<div class="choices"></div>')
                questionScreen.append($choicesDiv)
                questionObject.choices.forEach((choice) => {
                    let $choice = $(`<div>${choice}</div>`)
                    $choicesDiv.append($choice)
                    $choice.on('click', function() {
                        if (choice == questionObject.answer) {
                            alert(`That is correct! ${questionObject.points} points have been added to your total`)
                            player.score += questionObject.points
                            $('#player-score-display').html(player.score)
                        } else {
                            alert('That is incorrect')
                        }
                        questionScreen.addClass('hidden')
                        $('.game-board').removeClass('hidden')
                    })
                })
                $('.game-board').addClass('hidden')
                questionScreen.removeClass('hidden')
                $div.css('z-index', -1)
                player.questionsAnswered ++
                revealFinalQuestion('roundOne')
            })
            $('.game-board').append($div)
    }
}
//function that creates the cell for the final question for each round
function makeFinalQuestionCell(roundNumber) {
    let finalQuestionObject = finalQuestion[roundNumber]
    let $final = $('<div class="final"></div>')
    $final.text("Final Question")
    $final.on('click', function() {
        if (prompt(finalQuestionObject.question) === finalQuestionObject.answer) {
            alert(`That is correct! ${finalQuestionObject.points} points have been added to your total`)
            player.score += finalQuestionObject.points
            $('#player-score-display').html(player.score)
        } else {
            alert("Sorry, that is incorrect")
        }
        $('.game-board').empty()
        createBoard('roundTwo', 200)
    })
    $('.game-board').append($final)
}
// function that creates game board
function createBoard(roundNumber, minPoints) {
    buildCategoryRow(roundNumber)
        for (let i = minPoints; i <= (minPoints * 5); i += minPoints) {
            buildRow(roundNumber, i)
        }
        makeFinalQuestionCell(roundNumber)
}

//function that reveals the final question
function revealFinalQuestion(roundNumber) {
    if (player.questionsAnswered === 25) {
        // alert("It's time for the final question") 
        $('.final').css('z-index', 1)
    }
}