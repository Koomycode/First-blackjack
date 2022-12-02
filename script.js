const textEl = document.getElementById("text")
const cardsEl = document.getElementById("cards")
const sumEl = document.getElementById("sum")
const startEl = document.getElementById("start")
const drawEl = document.getElementById("draw")
const accountEl = document.getElementById("account")

let firstCard = 0
let secondCard = 0
let newCard = 0
let sum = 0
let cards = []
let message = ""
let isAlive = false
let hasWon = false
let money = 0
let hasLost = false
let canStart = true

function getRandomeCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {
    if (sum < 21) {
        message = "Draw One More Card?"
        canStart = false
        accountEl.textContent = "$ " + money

    } else if (sum === 21) {
        message = "Congratulations, You've Got a Blackjack!"
        hasWon = true
        canStart = true
        money += 17
        accountEl.textContent = "$ " + money

    } else {
        message = "You Lose!"
        isAlive = false
        hasLost = true
        canStart = true
        if (hasLost) {
            money -= 4
            accountEl.textContent = "$ " + money
        }
    }

    textEl.textContent = message

    cardsEl.textContent = ""
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = sum
}

startEl.addEventListener("click", function () {
    isAlive = true
    hasWon = false
    if (isAlive && canStart) {
        firstCard = getRandomeCard()
        secondCard = getRandomeCard()
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1]
        renderGame()
    }
})

drawEl.addEventListener("click", function () {
    if (isAlive && hasWon === false) {
        newCard = getRandomeCard()
        cards.push(newCard)
        sum += newCard

        money -= 1
        accountEl.textContent = "$ " + money

        renderGame()
    }
})