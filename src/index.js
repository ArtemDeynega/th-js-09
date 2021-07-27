import './styles/main.scss';
window.onload = () => {
    const clock = document.getElementById('clockdiv');
    const pauseBtn = document.getElementById('pause');
    const resumeBtn = document.getElementById('resume');
    const startBtn = document.getElementById('start');

    const timerMinutes = 10;

    let timerInterval;
    let timerLeft;
    let paused = false;
    let deadLine;

    const timeRemaining = endDate => {
        let diff = Date.parse(endDate) - Date.now();
        let formattedSeconds = diff / 1000;
        let formattedMinutes = diff / 60000;
        let seconds = Math.floor(formattedSeconds % 60);
        let minutes = Math.floor(formattedMinutes % 60);

        return {
            diff,
            seconds,
            minutes,
        };
    };

    const tick = () => {
        let getTime = timeRemaining(deadLine);
        let seconds = getTime.seconds;
        let minutes = getTime.minutes;

        let secondsBeautified = seconds
            .toString()
            .padStart(2, 0);

        let minutesBeautified = minutes
            .toString()
            .padStart(2, 0);

        clock.innerHTML = `${minutesBeautified}:${secondsBeautified}`;
        if (getTime.diff === 0) {
            clearInterval(timerInterval);
        }
    };

    const startTimer = timerLeft => {
        if (timerLeft) {
            timerInterval = setInterval(tick, 1000);
        } else {
            let currentTime = Date.now();

            deadLine = new Date(
                currentTime + timerMinutes * 60 * 1000,
            );
            timerInterval = setInterval(tick, 1000);
        }
    };
    const pauseTimer = () => {
        if (!paused) {
            paused = true;
            clearInterval(timerInterval);
            timerLeft = timeRemaining(deadLine).diff;
        }
    };
    const resumeTimer = () => {
        if (paused) {
            paused = false;
            deadLine = new Date(
                Date.parse(new Date()) + timerLeft,
            );
            startTimer(true);
        }
    };

    pauseBtn.addEventListener('click', () => {
        pauseTimer();
    });
    startBtn.addEventListener('click', () => {
        startTimer(false);
    });
    resumeBtn.addEventListener('click', () => {
        resumeTimer();
    });
};
