const songList = [
    {
        title: 'Bruno Mars - Locked Out Of Heaven',
        src: 'assets/audio/Bruno Mars - Locked Out Of Heaven.mp3',
        img: "assets/img/bruno-mars.png"
    },
    {
        title: 'Flo Rida - Good Feeling',
        src: 'assets/audio/Flo Rida - Good Feeling.mp3',
        img: "assets/img/flo-rida.jpg"
    },
    {
        title: 'LMFAO - Sexy and I Know It',
        src: 'assets/audio/LMFAO - Sexy and I Know It.mp3',
        img: 'assets/img/LMFAO.jpg'
    },
    {
        title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
        src: 'assets/audio/Luis Fonsi - Despacito ft. Daddy Yankee.mp3',
        img: 'assets/img/luisfonsi.jpg'
    },
    {
        title: 'Numb - Linkin Park',
        src: 'assets/audio/Numb - Linkin Park.mp3',
        img: 'assets/img/linkin-park.jpg'
    },
    {
        title: 'Coldplay - Paradise',
        src: 'assets/audio/Paradise - Coldplay.mp3',
        img: 'assets/img/cold-play.png'
    },
    {
        title: 'PSY - GANGNAM STYLE',
        src: 'assets/audio/PSY - GANGNAM STYLE.mp3',
        img: 'assets/img/PSY.jpg'
    },
];

let player = document.getElementById('player');

//lista generalizada 
for(let i = 0; i < songList.length; i++){
    
    let Html = `<div class="song">
    <div class="img">
    <img src="${songList[i].img}" />
    </div>
    <div class="more">
    <audio src="${songList[i].src}" id="music"></audio>
    <div class="song-info">
        <p id="name"> ${songList[i].title}
    </div>
    <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
    </div>
    </div>`

    player.insertAdjacentHTML("beforeend", Html);
}
