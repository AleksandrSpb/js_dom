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

function addSong(artistValue, titleValue) {
    songsContainer.insertAdjacentHTML('beforeend', `
    <div class="song">
      <h4 class="song__artist">${artistValue}</h4>
      <p class="song__title">${titleValue}</p>
      <button class="song__like"></button>
    </div>
  `);
}

addButton.addEventListener('click', function () {
    const artist = document.querySelector('.input__text_type_artist');
    const title = document.querySelector('.input__text_type_title');

    addSong(artist.value, title.value);
    renderHasSongs();

    artist.value = '';
    title.value = '';
});
