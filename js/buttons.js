export default function Button({
    header,
    resultScreen,
    initialScreen,
    modalScreen,
    playerScore,
    machineScore,
    rockInARowCount,
    isRockClicked,
    isPaperClicked,
    isScissorsClicked,
    modalCard
}) {
    function handleTryAgainClick() {
        resultScreen.classList.toggle('hide')
        initialScreen.classList.toggle('hide')
        isRockClicked = false
        isPaperClicked = false
        isScissorsClicked = false
    }
    function handleRulesClick() {
        modalScreen.classList.add('open')

    }

    function handleCloseModal() {
        modalScreen.classList.remove('open')
    }

    function handleCloseModalOutCard(event) {
        if (!modalCard.contains(event.target)) {
            handleCloseModal()
          }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            handleCloseModal()
        }
    }

    function resetScore() {
        header.querySelector('#playerScore').innerText = `Player: 0`
        header.querySelector('#machineScore').innerText = `Machine: 0`
        playerScore = 0
        machineScore = 0
        rockInARowCount = 0
    }


    return {
        handleTryAgainClick,
        handleRulesClick,
        handleCloseModal,
        handleKeydown,
        handleCloseModalOutCard,
        resetScore,
    }
}