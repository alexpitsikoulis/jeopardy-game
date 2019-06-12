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
        },
        finalQuestion: {
            categoryName: "Final Question",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
            answer: "answer",
            points: 1000
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
        },
        finalQuestion: {
            categoryName: "Final Question",
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut.",
            answer: "answer",
            points: 1000
        }
    }
}
//event listener on start button that saves player name hides welcome screen and shows round one game board
$('#start-button').on('click', function() {
    if(document.querySelector('#player-name-input').value !== "") {
        player.name = $('#player-name-input').val()
        $('#player-name-display').html(player.name)
        $('#player-score-display').html(player.score)
        $('.welcome-screen').fadeOut(100)
        $('.round-one-game-board').addClass('round-one-game-board-live').removeClass('round-one-game-board')
        giveRoundOneGameBoardValues()
    } else {
        alert('Please enter your name')
    }
})

//function that populates round one with the data from the questions object
function giveRoundOneGameBoardValues() {

    let counter = 0
    for (category in questions.roundOne) {
        let currentCategory = questions.roundOne[category]
        console.log(currentCategory.categoryName)
        let categoryField = document.querySelectorAll('.round-one.category')[counter]
        categoryField.innerHTML = currentCategory.categoryName
        console.log(categoryField)
        counter ++
    }
}
$('.game-board div.question').on('click', function() {
    alert('clicked')
})