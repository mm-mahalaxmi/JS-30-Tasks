function addsound(e)
{
    let allaudio=Array.from(this.document.querySelectorAll('audio'))
    allaudio.map((aud)=>{console.log(aud.pause());})
    console.log(allaudio);
    let audio=this.document.querySelector(`.audio${e.keyCode}`)
    if(!audio) return; //stops the function
    audio.currentTime=0; //will start from start
    audio.play() //plays the audio
    let key=this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key);
    key.classList.add('play')
    // setTimeout(() => {
    //     for(let i=0;i<=2000;i++)
    //     {
    //         console.log("hi");
    //     }
    // }, .99);
    setTimeout(() => {
    key.classList.remove('play')  
    }, 100);
}

window.addEventListener('keydown',addsound)