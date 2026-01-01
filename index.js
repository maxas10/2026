let date = new Date();

const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}


const timer = setInterval(() => {
    date = new Date();

    // date.setMonth(0);
    // date.setDate(1);
    if (date.getMonth() == 0 && date.getDate() == 1) {
        document.getElementById("time").innerHTML = "";
        document.getElementById("context").innerHTML = "Happy New Year " + (date.getFullYear()) + "! 🎉🎉🎉";
        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 30 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(1, 2), y: Math.random() - 0.2 },
                    zIndex: -1
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(1, 2), y: Math.random() - 0.2 },
                    zIndex: -1
                })
            );
        }, 250);
        clearInterval(timer);
    } else {
        const secondsLeft = (23 - date.getHours()) * 60 * 60 + (59 - date.getMinutes()) * 60 + (60 - date.getSeconds());

        if (secondsLeft <= 5) {
            document.getElementById("time").style.color = "red";
        }

        document.getElementById("time").innerHTML = secondsLeft;
        document.getElementById("context").innerHTML = secondsLeft == 1 ? " second left until " + (date.getFullYear()+1) : " seconds left until " + (date.getFullYear()+1);
    }
}, 10)