setInterval(() => {
    d = new Date();
    hourt = d.getHours();
    minutet = d.getMinutes();
    secondt = d.getSeconds();
    hrot = 30 * hourt + minutet / 2;
    mrot = 6 * minutet
    srot = 6 * secondt
        //Chinging CSS
    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
}, 1000);