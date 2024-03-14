function playSong(songPath) {
            var audio = document.getElementById("audioPlayer");
            var source = document.getElementById("audioSource");
            source.src = songPath;
            audio.load();
            audio.play();
        }