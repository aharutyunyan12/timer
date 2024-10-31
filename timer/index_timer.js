let timer;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
    const hrs = (Math.floor(seconds / 3600) < 10 ? "0" : "") + Math.floor(seconds / 3600)
    const mins = (Math.floor((seconds % 3600) / 60) < 10 ? "0" : "") + Math.floor((seconds % 3600) / 60)
    const secs = (seconds % 60 < 10 ? "0" : "") + (seconds % 60)
    document.getElementById("timer").textContent = `${hrs}:${mins}:${secs}`
}

function startTimer() {
    if (!isRunning) {
        isRunning = true
        timer = setInterval(() => {
            seconds++
            updateTimerDisplay()
        }, 1000)
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer)
        isRunning = false
    }
}

function resetTimer() {
    clearInterval(timer)
    isRunning = false
    seconds = 0
    updateTimerDisplay()
}