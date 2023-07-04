const hh = document.getElementById("hour")
const mm = document.getElementById("min")
const ss = document.getElementById("sec")


const displayTime = () => {
    const date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hRotation = hrs * 30 + mins/2
    let mRotation = mins * 6;
    let sRotation = secs * 6;
    hh.style.transform = `rotate(${hRotation}deg)`;
    mm.style.transform = `rotate(${mRotation}deg)`;
    ss.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000)