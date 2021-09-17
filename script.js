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
/*решение 3 задачи*/
function addSong(artistValue, titleValue) {
    const trackContainer =document.createElement ('div');
    trackContainer.classList.add('song');
    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue;
    const titleElement = document.createElement('h4');
    titleElement.classList.add('song__title');
    titleElement.textContent = titleValue;
    const likeButtonElement = document.createElement('button');
    likeButtonElement.classList.add('song__like');
    /*решение 4 задачи*/
    trackContainer.append(artistElement,titleElement,likeButtonElement);
    /*решение 5 задачи*/
    songsContainer.append(trackContainer);
    /*songsContainer.insertAdjacentHTML('beforeend', `
    <div class="song">
      <h4 class="song__artist">${artistValue}</h4>
      <p class="song__title">${titleValue}</p>
      <button class="song__like"></button>
    </div>
  `);*/

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
    const songs = document.querySelectorAll('.song');
/*ответ на 6 задачу*/
    for (let i = 0; i < songs.length; i++) {
        songs[i].remove();
    }
    /*ответ на 7 задачу*/
    renderNoSongs();
});
