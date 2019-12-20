var scoreHTML = document.querySelector(".score")
var firstCheesesHTML = document.querySelector(".first-cheeses")
var secondCheesesHTML = document.querySelector(".second-cheeses")
var answerHTML = document.querySelector(".answer")

var score = 0
var counter = 0
var answer

function generateRandomNumber() {
    var number = Math.ceil(Math.random() * 10)
    return number
}

function displayQuestion() {
    answerHTML.focus()
    var number1 = generateRandomNumber()
    var number2 = generateRandomNumber()
    answer = number1 + number2
    for (var i = 0; i < number1; i++) {
        var image = document.createElement("img")
        image.src = "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43c0ca.png"
        firstCheesesHTML.appendChild(image)
    }
    for (var i = 0; i < number2; i++) {
        var image = document.createElement("img")
        image.src = "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43c0ca.png"
        secondCheesesHTML.appendChild(image)
    }
}

displayQuestion()

answerHTML.addEventListener('keyup', handleAnswerInput)

function handleAnswerInput() {
    if (event.key == "Enter") {
        counter += 1
        if (answer == answerHTML.value) {
            score += 1
        }
        answerHTML.value = ""
        scoreHTML.innerHTML = `Score: ${score}/${counter}`
        while (firstCheesesHTML.firstChild) {
            firstCheesesHTML.removeChild(firstCheesesHTML.firstChild)
        }
        while (secondCheesesHTML.firstChild) {
            secondCheesesHTML.removeChild(secondCheesesHTML.firstChild)
        }
        if (counter < 10) {
            displayQuestion()
        } else {
            Swal.fire({
                type: 'success',
                title: 'You have completed the Quiz',
                text: `Score: ${score} / ${counter}`,
                backdrop: `rgba(0, 0, 0, .9)`,
                confirmButtonText: 'Start again',
                showCancelButton: true,
                cancelButtonText: 'Quit Game'
            }).then((result)=>{
                if (result.value) {
                    location.reload()
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        title: 'Bye bye',
                        showConfirmButton: false,
                        background: 'black',
                        backdrop: `black`,
                        allowOutsideClick: false
                    })
                }
            })
        }
    }
}

