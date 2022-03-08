//player
let btn = document.querySelectorAll('.song #play_btn')
let song = document.querySelectorAll('#music')

//pop music player parts
let fullscreen = document.querySelector('.fullscreen')
let downPlayer = document.querySelector('#down_player')
let current_track_name = document.querySelector('#song-track-name')
let song_img = document.querySelector('.song-img')

//Controlls parts
let slider = document.querySelector('#slider')
let prevSong = document.querySelector('#prev')
let playSong = document.querySelector('#play')
let nextSong = document.querySelector('#next')
let stopSong = document.querySelector('#stop')

// songs durations
let current = document.querySelector('#current_duration')
let totalDuration = document.querySelector('#total_duration')

// Small music player part

let s_m_player = document.querySelector('.small-music-player')
let imgAuthor = document.querySelector('.imgAuthor')
let wave_animation = document.querySelector('.wave-animation')
let song_name = document.querySelector('#song-name')
let upPlayer = document.querySelector('#up_player')


// Defaut values

let is_song_played = false;
let song_status = false;
let index_no = 0;

btn.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        
        s_m_player.style.transform = 'translateY(0px)';
        
        //verifica se a musica e a mesmo que a posição
        if(index != index_no){
            song_status = false;
        }
        index_no = index;

        song[index].currentTime = 0;
        // toca a musica se for posição diferente, se for a mesma pausa
        if(song_status == false){
            play_song();
        }else{
            pause_song();
        }
    })
})

stopSong.addEventListener('click', function pause_song(){//pausar a musica
    song[index_no].pause();
    song_status = false;
    clearInterval(update_second);
    wave_animation.style.opacity = '0';
})

function update_second(){/*essa função vai atualizar tudo pra 1s*/
    let position = 0;
    //colocar a duração da musica no mesmo tempo que a barra de duração
    if(!isNaN(song[index_no].duration)){
        position = song[index_no].currentTime * (100 / song[index_no].duration);
        slider.value = position;
    }

    let durationMinutes = Math.floor(song[index_no].duration / 60);
    let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;

    //calcula o tempo esquerdo e o total da duração
    let curr_minutes = Math.floor(song[index_no].currentTime / 60);
    let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);

    //Adicione um zero aos valores de tempo de um dígito
    if(curr_seconds < 10) { curr_seconds = "0" + curr_seconds;};
    if(durationSeconds < 10){ durationSeconds = "0" + durationSeconds;};

    //atualizar a duração na tela
    current_duration.textContent = curr_minutes + ":" + curr_seconds;

    //função vai execultar quando o som acabar
    if(song[index_no].ended){
        clearInterval(update_second);
        wave_animation.style.opacity = '0';
    }
}
//esconder
// aparecer
// mudança de musica
//mostra a tela inteira
upPlayer.addEventListener('click', function(){
    fullscreen.style.transform = 'translateY(0%)';
})

//esconde a tela inteira
downPlayer.addEventListener('click', function(){
    fullscreen.style.transform = 'translateY(110%)';
})

//botao play pra tela inteira
playSong.addEventListener('click', function(){
        song_status == false
        song[index_no].play();
        song_status = true;
        wave_animation.style.opacity = '1';
})

//muda a posição do slider 
function change_duration(){
    slider_position = song[index_no].duration * (slider.value / 100);
    song[index_no].currentTime = slider_position;
}

nextSong.addEventListener('click', function(){
    index_no = index_no + 1;
    if(index_no == songList.length){
        index_no = 0;
    }
    song[index_no].correntTime = 0;
    play_song();
})

prevSong.addEventListener('click', function(){
    
    if (index_no == 0) {
      index_no = songList.length-1;
    }else{
      index_no = index_no -1;
    }

    song[index_no].currentTime = 0;

    play_song();
});

//função tocar 
function play_song(){
    song[index_no].play();

    //condição faz tocar uma musica de cada vez
    if(is_song_played == true){
        document.querySelector('.active_song').pause();
        document.querySelector('.active_song').classList.remove('active_song');
    }else{
        is_song_played = true;
    }

    song[index_no].classList.add('active_song');

    song_status = true;
    setInterval(update_second, 1000);
    wave_animation.style.opacity = '2';
    fullscreen.style.transform = 'translateY(0%)';

    song_img.innerHTML = `<img src="${songList[index_no].img}" />`
    imgAuthor.innerHTML = `<img src="${songList[index_no].img}" />`

    song_name.innerHTML = songList[index_no].title;

    current_track_name.innerHTML = songList[index_no].title;

}