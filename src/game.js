

class Game {
  constructor(props) {
    super(props)
    this.guesses = 0
    this.playerTurn = "Julie"
  }

  determineGuesses() {
    let turns = [1, 1, 1, 2, 2, 2, 3 , 4]
    this.guesses = Math.floor(Math.random() * turns.length)
    return Math.floor(Math.random() * turns.length)
  }

  isNumberwang() {
    if (this.guesses === 0) {
      App.numberwang = true
      this.determineGuesses()
    } else {
      this.guesses--
    }
  }

  round() {
    if (this.playerTurn === 'Julie') {
      // a thing
      this.playerTurn === 'Simon'

    } else {
      // another thing
      this.playerTurn === 'Julie'
    }
  }

  receiveGuess() {
    // ???
  }


}
