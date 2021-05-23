const highScoresList = document.querySelector('#highScoresList')
const highscore = JSON.parse(localStorage.getItem('highscore')) || []
highScoresList.innerHTML =
    highscore.map(score => {
        return '<li class="highscore"> ${score.name}=${score.score}</li>'
    }).join('')