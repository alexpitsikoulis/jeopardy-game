//object that holds player name and score
const player = {
    name: null,
    score: 0
}
//object that stores questions, their answers, and their point values
const questions = {
    roundOne: {
        category1: {
            categoryName: "Geography",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500
            }
        },
        category2: {
            categoryName: "Who Said It?",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500
            }
        },
        category3: {
            categoryName: "Web Development",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500
            }
        },
        category4: {
            categoryName: "Classic Literature",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500
            }
        },
        category5: {
            categoryName: "The Periodic Table",
            question100: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 100
            },
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question300: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 300
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question500: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 500
            }
        }
    },
    roundTwo: {
        category1: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000
            }
        },
        category2: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000
            }
        },
        category3: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000
            }
        },
        category4: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000
            }
        },
        category5: {
            categoryName: "Category",
            question200: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 200
            },
            question400: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 400
            },
            question600: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 600
            },
            question800: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 800
            },
            question1000: {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
                answer: "answer",
                points: 1000
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
        $('.welcome-screen').fadeOut(100)
        $('.game-board').toggleClass('game-board-live')
        createBoard('roundOne')
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

//function that populates round one with the data from the questions object
function giveRoundOneGameBoardValues() {
    let counter = 0
    for (category in questions.roundOne) {
        let currentCategory = questions.roundOne[category]
        let categoryField = document.querySelectorAll('.game-board .category')[counter]
        categoryField.innerHTML = currentCategory.categoryName
        console.log(currentCategory.question100.question)
        counter ++
    }
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
            $div.html(`<p>${questionObject.points}</p>`)
            $div.addClass(`${category} question`)
            $div.on('click', function() {
                alert(questionObject.points)
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
        alert(finalQuestionObject.points)
    })
    $('.game-board').append($final)
}
// function that creates game board
function createBoard(roundNumber) {
    buildCategoryRow(roundNumber)
        for (let i = 100; i <= 500; i += 100) {
            buildRow(roundNumber, i)
        }
        makeFinalQuestionCell(roundNumber)
}
