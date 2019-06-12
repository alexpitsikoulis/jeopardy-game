//object that holds player name and score
const player = {
    name: null,
    score: 0
}
//event listener on start button that saves player name hides welcome screen and shows game board
$('#start-button').on('click', function() {
    if(document.querySelector('#player-name-input').value !== "") {
        player.name = $('#player-name-input').val()
        $('#player-name-display').html(player.name)
        $('#player-score-display').html(player.score)
        $('.welcome-screen').fadeOut(100)
        $('.round-one-game-board').addClass('round-one-game-board-live').removeClass('round-one-game-board')
    } else {
        alert('Please enter your name')
    }
})
