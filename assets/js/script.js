const audioPlayer = document.getElementById("audioPlayer");
const musicTitle = document.getElementById("musicTitle");
const musicCover = document.getElementById("musicCover");

// Array de músicas
const songs = [
    {
        title: "Playboi Carti, The Weeknd - Timeless",
        src: "assets/img/songs/timeless.mp3",
        cover: "assets/img/collab/cover/cartitheweeknd.jpeg"
    },
    {
        title: "Billie Eilish - Birds Of A Feather",
        src: "assets/img/songs/birdsofafeather.mp3",
        cover: "assets/img/collab/cover/hitmehardandsoft.jpeg"
    },
    {
        title: "Travis Scott - Drugs You Should Try It",
        src: "assets/img/songs/drugsyoushouldtryit.mp3",
        cover: "assets/img/collab/cover/daysbeforerodeo.png"
    },
    {
        title: "Kanye West - All Falls Down",
        src: "assets/img/songs/allfallsdown.mp3",
        cover: "assets/img/collab/cover/ALLFALLSDOWN.png"
    },
    {
        title: "Post Malone, Future, Halsey - Die For Me",
        src: "assets/img/songs/dieforme.mp3",
        cover: "assets/img/collab/cover/hollywoodsbleeding.jpeg"
    },
    {
        title: "Metro Boomin, Future - Young Metro",
        src: "assets/img/songs/youngmetro.mp3",
        cover: "assets/img/collab/Artists/future/future4.png"
    },
    {
        title: "A$AP Rocky, Joe Fox - Holy Ghost",
        src: "assets/img/songs/holyghost.mp3",
        cover: "assets/img/collab/cover/atlonglastasap.jpg"
    },
    {
        title: "Travis Scott - Mo City Flexologist",
        src: "assets/img/songs/mocityflexologist.mp3",
        cover: "assets/img/collab/cover/travisdeluxe.png"
    },
    {
        title: "Kanye West, Pusha T - Runaway",
        src: "assets/img/songs/runaway.mp3",
        cover: "assets/img/collab/cover/runaway.png"
    },
    {
        title: "Playboi Carti - HOODBYAIR",
        src: "assets/img/songs/hoodbyair.mp3",
        cover: "assets/img/collab/cover/iammusiccarti.jpg"
    },
    {
        title: "Post Malone - Hollywood's Bleeding",
        src: "assets/img/songs/hollywoodsbleeding.mp3",
        cover: "assets/img/collab/cover/hollywoodsbleeding.jpeg"
    },
];

let currentSongIndex = 0;

// Função para carregar a música
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    musicTitle.textContent = song.title;
    musicCover.src = song.cover;
    audioPlayer.load();
}

// Evento para o botão "Próxima Música"
document.getElementById("nextSong").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move para a próxima música
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Evento para o botão "Música Anterior"
document.getElementById("prevSong").addEventListener("click", () => {
    const currentTime = audioPlayer.currentTime;

    if (currentTime < 5) {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Volta para a música anterior
    } else {
        audioPlayer.currentTime = 0; // Volta para o início da música atual
    }

    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Evento para passar automaticamente para a próxima música ao final
audioPlayer.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move para a próxima música
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Carregar a primeira música ao iniciar
loadSong(currentSongIndex);
