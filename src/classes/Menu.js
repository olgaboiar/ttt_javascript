class Menu {
  initSelection () {
    var elems = document.querySelectorAll('select')
    M.FormSelect.init(elems, {})
  }

  getHumanSymbol () {
    var optionsForHuman = document.getElementById('human-symbol')
    return optionsForHuman.options[optionsForHuman.selectedIndex].value
  }

  getComputerSymbol () {
    var optionsForComputer = document.getElementById('computer-symbol')
    return optionsForComputer.options[optionsForComputer.selectedIndex].value
  }

  getDifficultyLevel () {
    var optionsForDifficulty = document.getElementById('difficulty-level')
    for (var i = 0, length = optionsForDifficulty.length; i < length; i++) {
      if (optionsForDifficulty[i].checked) {
        return optionsForDifficulty[i].value
      }
    }
  }

  getFirstToMoveComp () {
    return document.getElementById('first-move').checked
  }

  errorMessage (message) {
    M.toast({
      html: message, classes: 'teal darken-1'
    })
  }
}

module.exports = Menu
