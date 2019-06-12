//object that holds player name and score
const player = {
    name: null,
    score: 0
}
//event listener on start button that saves player name hides welcome screen and shows game board
$('#start-button').on('click', function() {
    player.name = $('#player-name-input').val()
    $('#player-name-display').html(player.name)
    $('#player-score-display').html(player.score)
    $('.welcome-screen').fadeOut(100)
    $('.roundOneGameBoard').addClass('roundOneGameBoardLive').removeClass('roundOneGameBoard')

})
