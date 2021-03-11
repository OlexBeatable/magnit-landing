const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', (e) => {
    let audio = playButton.querySelector('.audio');
    let playImg = playButton.querySelector('.play-button__image-play');
    let stopImg = playButton.querySelector('.play-button__image-stop');
    if (audio.paused) {
        audio.play();
        stopImg.classList.remove('play-button__image_hidden');
        playImg.classList.add('play-button__image_hidden');
    } else {
        audio.pause();
        playImg.classList.remove('play-button__image_hidden');
        stopImg.classList.add('play-button__image_hidden');
    }
});