//object that holds player name and score
const player = {
    name: null,
    score: 0
}
//event listener on start button that saves player name hides welcome screen and shows game board
$('#start-button').on('click', function() {
    player.name = $('#player-name-input').val()
    $('.welcome-screen').fadeOut(100)
    $('.roundOneGameBoard').fadeIn(100)
})
