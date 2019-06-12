$('#start-button').on('click', function() {
    console.log('clicked!')
    $('.welcome-screen').fadeOut(100)
})
const player = {
    name: null,
    score: 0
}