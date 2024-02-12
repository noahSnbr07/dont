let
    gameIsRunning = false,
    score = 0,
    scoreInterval;

document.querySelector('#mainScore').classList.add('hidden');

function formatTime(seconds) {
    // Calculate hours, minutes, seconds, and remaining milliseconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);

    // Add leading zeros if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Concatenate into HH:MM:SS.MM format
    return `${hours}:${minutes}:${seconds}`;
}


const start = () => {
    document.querySelector('#start-hint').classList.add('hidden');
    document.querySelector('#mainScore').classList.remove('hidden');
    document.querySelector('#mainScore').innerText = '00:00:00';
    gameIsRunning = true;
    scoreInterval = setInterval(() => {
        if (gameIsRunning) {
            score = score += 1;
            document.querySelector('#mainScore').innerText = formatTime(score);
        } else { return; }
    }, 1000);
}

const loose = () => {
    document.querySelector('#start-hint').classList.remove('hidden');
    document.querySelector('#mainScore').classList.add('hidden');
    document.querySelector('#start-hint').innerText = `you lastet ${formatTime(score)}, click to restart`;
    clearInterval(scoreInterval);
    gameIsRunning = false;
    score = 0;
    scoreInterval = null;
}

onblur = () => loose();
onkeydown = () => loose();
onclick = () => {
    if (gameIsRunning) { loose(); }
    else { start() }
}

onmousemove = () => {
    if (gameIsRunning) { loose(); }
    else { return; }
}