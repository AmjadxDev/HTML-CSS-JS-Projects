setInterval( () => {
    const date = new Date();
    let hourTime = date.getHours();
    let minutesTime = date.getMinutes();
    let secondsTime = date.getSeconds();

    let hourRotation = 30 * hourTime + minutesTime/2;
    let minutesRotation = 6 * minutesTime;
    let secondsRotation = 6 * secondsTime;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minutes.style.transform = `rotate(${minutesRotation}deg)`;
    seconds.style.transform = `rotate(${secondsRotation}deg)`;

}, 1000


);