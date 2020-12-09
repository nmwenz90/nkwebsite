import { showWorksImage, outerDiv } from './utilities.js'

// console.log('works -->',works)
// Text
const portfolioWebButtonText = 'Open Website'
const eventflyer = 'https://nmwenz90.github.io/eventflyer.github.io/'
const reactime = 'https://reactime.io'
const miah = 'https://themiahapp.herokuapp.com/'
const soundboard = 'https://nmwenz90.github.io/Nate-s-SoundBoard-Project/'
const lp = 'https://www.openprocessing.org/sketch/623862'
//2ND COLUMN IMAGE LG
let mainImg = document.querySelector('#worksWindow img')
//ANIME ANIMATION
setTimeout(() => {
    anime({
        targets: '#aka',
        opacity: 1
      });
}, 80)

//THUMBNAILS
const thumb1 = document.querySelector('#thumb1')
const thumb1Src = document.querySelector('#thumb1').href;

const thumb2 = document.querySelector('#thumb2')
const thumb2Src = document.querySelector('#thumb2').href;
 
const thumb3 = document.querySelector('#thumb3')
const thumb3Src = document.querySelector('#thumb3').href;

const thumb4 = document.querySelector('#thumb4')
const thumb4Src = document.querySelector('#thumb4').href;

const thumb5 = document.querySelector('#thumb5')
const thumb5Src = document.querySelector('#thumb5').href;

const thumb6 = document.querySelector('#thumb6')
const thumb6Src = document.querySelector('#thumb6').href;

//Workswindow
let worksWindow = document.querySelector('#worksWindow')
//Span
const span1 = document.createElement('div')
span1.setAttribute('class', 'spanText row ')
span1.innerHTML = '<span>Check out my other works on:<span>'

const bandcampImg = showWorksImage('https://res.cloudinary.com/dvwvkt7iq/image/upload/v1607301321/bandcamp-logotype-color-512_ifwbso.png', 'bandcampImg image-thumbnail col-lg-6', false, 'bandcamp')
const audiusImg = showWorksImage('https://res.cloudinary.com/dvwvkt7iq/image/upload/v1607301540/audius_transparent_hgwabb.png', 'audiusImg image-thumbnail col-lg-3', false, 'audius')
const centImg = showWorksImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrishparr.com%2Fwp-content%2Fuploads%2F2011%2F02%2Fcent-symbol-header-image.png&f=1&nofb=1', 'centImg image-thumbnail col-lg-3', true, 'cent')
const raribleImg = showWorksImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fairdrops.io%2Fwp-content%2Fuploads%2F2020%2F10%2FRarible-logo.jpg&f=1&nofb=1', 'raribleImg image-thumbnail col-lg-2', true, 'rarible' )
const spotifyImg = showWorksImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F08%2FSpotify-Logo.png&f=1&nofb=1', 'spotifyImg image-thumbnail col-lg-3', true, 'spotify')

const captionText = document.querySelector('.caption')

//Portfolio image button

const portfolioWebButton = document.querySelector('#portfolioWebButton');

class ThumbnailObj {
    constructor(imgSrc, capText, href){
        this.capText = capText;
        this.href = href;
        this.imgSrc = imgSrc;
    }
    listener = (e) => {
        e.preventDefault();
        mainImg.style.display = 'block';
        mainImg.src = this.imgSrc;
        mainImg.style.cursor = 'pointer';
        outerDiv.style.display = 'none';
        captionText.innerHTML = this.capText;
        portfolioWebButton.href = this.href;
        portfolioWebButton.innerHTML = portfolioWebButtonText;
        span1.style.display='none';
    }
}

// const hr
const thumbObj1 = new ThumbnailObj(thumb1Src,'Reactime is a Time travel debugger for React Applications', reactime);
const thumbObj2 = new ThumbnailObj(thumb2Src,'Machine Learning based communication (AAC) tool to aid the speech impaired', miah);
const thumbObj3 = new ThumbnailObj(thumb3Src, 'Soundboard is a drum machine that plays original wav samples', soundboard);
const thumbObj4 = new ThumbnailObj(thumb4Src, 'LP is a animated music player with original music',lp)
const thumbObj6 = new ThumbnailObj(thumb6Src, 'Event flyer is an interacctive flyer designed for Pittsburgh Artist JKJ', eventflyer)
// console.log('thumbobj src', thumbObj1.imgSrc)
thumb1.addEventListener('click', thumbObj1.listener);
thumb2.addEventListener('click', thumbObj2.listener);
thumb3.addEventListener('click', thumbObj3.listener);
thumb4.addEventListener('click', thumbObj4.listener);
thumb6.addEventListener('click', thumbObj6.listener);

//EVENTS



//Music work
thumb5.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    mainImg.style.display = 'none'
    span1.style.display='block'
    worksWindow.appendChild(span1);
    captionText.innerHTML = 'Genres: 8Bit, Electronic and Hiphop. With over 18 albums/eps on Bandcamp'
    captionText.href = 'https://natekodi.bandcamp.com'
    portfolioWebButton.href = 'https://natekodi.bandcamp.com'
    portfolioWebButton.innerHTML = 'All Music'
    portfolioWebButton.style.width = '10rem'

// worksWindow
outerDiv.style.display = 'block'
worksWindow.appendChild(outerDiv)
//WORKSWINDOW IMAGE EVENTS
bandcampImg.addEventListener('click', () => window.open('https://natekodi.bandcamp.com'))
audiusImg.addEventListener('click', () => window.open('https://audius.co/natekodi'))
centImg.addEventListener('click', () => window.open('https://beta.cent.co/natekodi'))
raribleImg.addEventListener('click', () => window.open('https://app.rarible.com/natekodi'))
spotifyImg.addEventListener('click', () => window.open('https://open.spotify.com/artist/7M7UJrBfcvJamNJUfFb6fu'))

})

// More Works

mainImg.addEventListener('click', () => {
    if(mainImg.src === thumb1Src) window.open(reactime)
    if(mainImg.src === thumb2Src) window.open(miah)
    if(mainImg.src === thumb3Src) window.open(soundboard)
    if(mainImg.src === thumb4Src) window.open(lp)
    if(mainImg.src === thumb6Src) window.open(eventflyer)
})