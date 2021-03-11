const countdownDate = new Date("Oct 15, 2020 00:00:00").getTime();
const daysText = document.querySelector('#days');
const hoursText = document.querySelector('#hours');
const minutesText = document.querySelector('#minutes');

const x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    format(daysText, days);
    format(hoursText, hours);
    format(minutesText, minutes);

    if (distance < 0) {
        clearInterval(x);
        daysText.innerHTML = '00';
        hoursText.innerHTML = '00';
        minutesText.innerHTML = '00';
    }
}, 1000);

function format(elem, insert) {
    if (insert < 10)
        elem.innerHTML = '0' + insert;
    else
        elem.innerHTML = insert;
}