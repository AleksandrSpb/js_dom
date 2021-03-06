const container = document.querySelector('.container');
const songsContainer = container.querySelector('.songs-container');
const addButton = container.querySelector('.input__btn_action_add');
const resetButton = container.querySelector('.input__btn_action_reset');
const noSongsElement = container.querySelector('.no-songs');

function renderHasSongs() {
    resetButton.removeAttribute('disabled');
    resetButton.classList.remove('input__btn_disabled');
    noSongsElement.classList.add('no-songs_hidden');
}

function renderNoSongs() {
    resetButton.setAttribute('disabled', true);
    resetButton.classList.add('input__btn_disabled');
    noSongsElement.classList.remove('no-songs_hidden');
}
/*решение 9 задачи*/
function addSong(artistValue, titleValue) {
    const songTemplate = document.querySelector('#song-template').content;
    /*решение 10 задачи*/
    const songElement = songTemplate.querySelector('.song').cloneNode(true);
    songElement.querySelector('.song__artist').textContent = artistValue;
    // добавьте songElement название песни
    /*решение 11 задачи*/
    songElement.querySelector('.song__title').textContent = titleValue;
    /*решение 13 задачи*/
    songElement.querySelector('.song__like').addEventListener('click', function (evt) {
       /*решение 14 задачи*/
        evt.target.classList.toggle('song__like_active');

    });
    /*решение 12 задачи*/
    songsContainer.append(songElement);


}

addButton.addEventListener('click', function () {
    const artist = document.querySelector('.input__text_type_artist');
    const title = document.querySelector('.input__text_type_title');

    addSong(artist.value, title.value);
    renderHasSongs();

    artist.value = '';
    title.value = '';
});

resetButton.addEventListener('click', function () {
    const songs = document.querySelectorAll('.song')

    for (let i = 0; i < songs.length; i++) {
        songs[i].remove();
    }

    renderNoSongs();
});
