import { showappsImage, outerDiv, generateElement } from './utilities.js';
import runAnimation from './runAnimation.js';

console.log('current window or path', window.location.pathname);

if (window.location.pathname === '/index.html') {
  setTimeout(() => {
    anime({
      targets: '#aka',
      opacity: 1,
    });
  }, 80);

  setTimeout(() => {
    runAnimation();
  }, 1);
}

//THUMBNAILS

if (window.location.pathname === '/apps.html') {
  // Text
  const portfolioWebButtonText = 'Open Website';
  const eventflyer = 'https://nmwenz90.github.io/eventflyer.github.io/';
  const reactime = 'https://reactime.io';
  const miah = 'https://themiahapp.herokuapp.com/';
  const soundboard = 'https://nmwenz90.github.io/Nate-s-SoundBoard-Project/';
  const lp = 'https://www.openprocessing.org/sketch/623862';
  //2ND COLUMN IMAGE LG
  let mainImg = document.querySelector('#appsWindow img');
  //ANIME ANIMATION
  // runAnimation()

  const thumb1 = document.querySelector('#thumb1');
  const thumb1Src = document.querySelector('#thumb1').href;

  const thumb2 = document.querySelector('#thumb2');
  const thumb2Src = document.querySelector('#thumb2').href;

  const thumb3 = document.querySelector('#thumb3');
  const thumb3Src = document.querySelector('#thumb3').href;

  const thumb4 = document.querySelector('#thumb4');
  const thumb4Src = document.querySelector('#thumb4').href;

  const thumb5 = document.querySelector('#thumb5');
  const thumb5Src = document.querySelector('#thumb5').href;

  const thumb6 = document.querySelector('#thumb6');
  const thumb6Src = document.querySelector('#thumb6').href;

  //appswindow
  let appsWindow = document.querySelector('#appsWindow');
  //Span
  const span1 = document.createElement('div');
  span1.setAttribute('class', 'spanText row ');
  span1.innerHTML = '<span>Check out my other apps on:<span>';

  //showsapps imagge diap
  const bandcampImg = showappsImage(
    'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1607301321/bandcamp-logotype-color-512_ifwbso.png',
    'bandcampImg image-thumbnail col-lg-6',
    false,
    'bandcamp'
  );
  const audiusImg = showappsImage(
    'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1607301540/audius_transparent_hgwabb.png',
    'audiusImg image-thumbnail col-lg-3',
    false,
    'audius'
  );
  const centImg = showappsImage(
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrishparr.com%2Fwp-content%2Fuploads%2F2011%2F02%2Fcent-symbol-header-image.png&f=1&nofb=1',
    'centImg image-thumbnail col-lg-3',
    true,
    'cent'
  );
  const raribleImg = showappsImage(
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fairdrops.io%2Fwp-content%2Fuploads%2F2020%2F10%2FRarible-logo.jpg&f=1&nofb=1',
    'raribleImg image-thumbnail col-lg-2',
    true,
    'rarible'
  );
  const spotifyImg = showappsImage(
    'https://res.cloudinary.com/dvwvkt7iq/image/upload/v1614056491/opensea-logomark-full-colored_pmpu9r.png',
    'spotifyImg image-thumbnail col-lg-3',
    true,
    'opensea'
  );

  //elemeents for grid
  // const grid = document.createElement('div')
  // const card = document.createElement('div')
  // const img = document.createElement('img')
  // const caption = document.createElement('p')
  // const link = document.createElement('a')

  // const grid = generateElement('div', 'cont', 'grid');
  // const card = generateElement('div', 'card', 'card');
  // const cardImage = generateElement('img', 'image', 'cardImage');
  // const cardCaption = generateElement('p', 'caption', 'cardCaption');
  // const cardLink = generateElement('a', 'link', 'cardLink');

  const captionText = document.querySelector('.caption');

  //Portfolio image button

  const portfolioWebButton = document.querySelector('#portfolioWebButton');

  class ThumbnailObj {
    constructor(imgSrc, capText, href) {
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
      span1.style.display = 'none';
      // portfolioWebButton.innerHTML = 'Working'
    };

    hoverListener = (e) => {
      e.preventDefault();
    };
  }

  // const hr
  const thumbObj1 = new ThumbnailObj(
    thumb1Src,
    'Reactime is a Time travel debugger for React Applications',
    reactime
  );
  const thumbObj2 = new ThumbnailObj(
    thumb2Src,
    'Machine Learning based communication (AAC) tool to aid the speech impaired',
    miah
  );
  const thumbObj3 = new ThumbnailObj(
    thumb3Src,
    'Soundboard is a drum machine that plays original wav samples',
    soundboard
  );
  const thumbObj4 = new ThumbnailObj(
    thumb4Src,
    'LP is a animated music player with original music',
    lp
  );
  const thumbObj6 = new ThumbnailObj(
    thumb6Src,
    'Event flyer is an interacctive flyer designed for Pittsburgh Artist JKJ',
    eventflyer
  );

  thumb1.addEventListener('click', thumbObj1.listener);
  thumb2.addEventListener('click', thumbObj2.listener);
  thumb3.addEventListener('click', thumbObj3.listener);
  thumb4.addEventListener('click', thumbObj4.listener);
  thumb6.addEventListener('click', thumbObj6.listener);

  //EVENTS

  //Music work
  thumb5.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    mainImg.style.display = 'none';
    span1.style.display = 'block';
    appsWindow.appendChild(span1);
    captionText.innerHTML =
      'Genres: 8Bit, Electronic and Hiphop. With over 18 albums/eps on Bandcamp';
    captionText.href = 'https://natekodi.bandcamp.com';
    portfolioWebButton.href = 'https://natekodi.bandcamp.com';
    portfolioWebButton.innerHTML = 'All Music';
    portfolioWebButton.style.width = '10rem';

    // appsWindow
    outerDiv.style.display = 'block';
    appsWindow.appendChild(outerDiv);
    //appsWINDOW IMAGE EVENTS
    bandcampImg.addEventListener('click', () =>
      window.open('https://natekodi.bandcamp.com')
    );
    audiusImg.addEventListener('click', () =>
      window.open('https://audius.co/natekodi')
    );
    centImg.addEventListener('click', () =>
      window.open('https://beta.cent.co/natekodi')
    );
    raribleImg.addEventListener('click', () =>
      window.open('https://app.rarible.com/natekodi')
    );
    spotifyImg.addEventListener('click', () =>
      window.open('https://opensea.io/accounts/natekodi')
    );
  });

  // More apps

  mainImg.addEventListener('click', () => {
    if (mainImg.src === thumb1Src) window.open(reactime);
    if (mainImg.src === thumb2Src) window.open(miah);
    if (mainImg.src === thumb3Src) window.open(soundboard);
    if (mainImg.src === thumb4Src) window.open(lp);
    if (mainImg.src === thumb6Src) window.open(eventflyer);
  });
}

if (window.location.pathname === '/art.html') {
  console.log('im on the page!');
  const openseaGrid = generateElement('div', 'container', 'grid');
  const audiusGrid = generateElement('div', 'container', 'audiusGrid');
  console.log('curr grid', openseaGrid);

  const options = { method: 'GET' };

  async function getOpenseaData() {
    // let fetchedData;
    try {
      const res = await fetch(
        'https://api.opensea.io/api/v1/assets?owner=0x481682c6183bbaaf0b8b8136875dfa24bf508826&order_direction=desc&offset=0&limit=7&order_by=visitor_count',
        options
      );
      const fetchedData = await res.json();
      return fetchedData;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  const openSeaData = await getOpenseaData();

  //CARDS from opensea data
  if (openSeaData) {
    const assets = openSeaData.assets;
    for (let i = 0; i < assets.length; i++) {
      const cardName = assets[i];

      const card = generateElement('div', 'customCard', cardName.id);
      const image = generateElement('img', 'card-img-top', cardName.id);
      const cardBody = generateElement('div', 'card-body', 'cardBody');
      const cardTitle = generateElement('div', 'card-title', 'cardTitle');
      cardTitle.innerHTML = cardName.name;
      cardTitle.innerHTML = `${cardTitle.innerHTML.toUpperCase()}`;
      const cardText = generateElement('p', 'card-text', 'cardText');

      if (!cardName.description) cardText.innerHTML = 'Info Unavailable';
      else cardText.innerHTML = cardName.description;

      const descriptionLength = cardText.innerHTML.length;
      const lengthLimit = 100;
      if (descriptionLength > lengthLimit) {
        console.log(`desciption Length is longer than limit`);
        const firstHalf = cardText.innerHTML.substring(0, lengthLimit);
        const secondHalf = cardText.innerHTML.substring(
          lengthLimit,
          descriptionLength
        );
        const p = generateElement('p', 'card-text', 'firstHalf');
        p.innerHTML = firstHalf;
        cardText.appendChild(p);
        cardText.innerHTML = `
                        <p>${firstHalf}<span id="dots" onclick="(function runit (){
                            console.log('clicking')
                            const readMore = document.querySelector('#readMore')
                            // const dots = document.querySelector('#dots')
                            readMore.style.display === 'inline' ? readMore.style.display = 'none' : readMore.style.display = 'inline'
                            
                            
                        })()">...</span><span id="readMore">${secondHalf}</span></p>
                    `;
      }
      const cardLink = generateElement('a', 'link', 'cardLink');
      image.src = cardName.image_url;
      cardBody.style.width = '18rem';
      // assetCont.innerHTML = cardName.name
      const button = generateElement('a', 'btn btn-primary', 'button');
      button.setAttribute('href', cardName.permalink);
      button.setAttribute('target', 'external');
      button.innerHTML = 'More on Opensea';
      button.style.border = 'none';
      image.addEventListener('click', () => window.open(cardName.permalink));

      if (cardName.image_url !== '') {
        openseaGrid.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
      }
    }
  }

  //Audius Data

  async function getAudiusData() {
    // let fetchedData;
    try {
      const res = await fetch(
        `https://discoveryprovider.audius3.prod-us-west-2.staked.cloud/v1/full/users/handle/natekodi/tracks?limit=7&app_name="NateKodiPortfolio"`,
        options
      );
      const fetchedData = await res.json();
      return fetchedData;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  const audiusData = await getAudiusData();

  if (audiusData) {
    const data = audiusData.data;
    for (let i = 0; i < data.length; i++) {
      const audiusCardName = data[i];

      const card = generateElement('div', 'customCard', audiusCardName.id);
      const image = generateElement('img', 'card-img-top', audiusCardName.id);
      const cardBody = generateElement('div', 'card-body', 'cardBody');
      const cardTitle = generateElement('div', 'card-title', 'cardTitle');
      cardTitle.innerHTML = audiusCardName.title;
      cardTitle.innerHTML = `${cardTitle.innerHTML.toUpperCase()}`;
      const cardText = generateElement('p', 'card-text', 'cardText');

      if (!audiusCardName.description) cardText.innerHTML = 'Info Unavailable';
      else cardText.innerHTML = audiusCardName.description;

      const descriptionLength = cardText.innerHTML.length;
      const lengthLimit = 100;
      if (descriptionLength > lengthLimit) {
        console.log(`desciption Length is longer than limit`);
        const firstHalf = cardText.innerHTML.substring(0, lengthLimit);
        const secondHalf = cardText.innerHTML.substring(
          lengthLimit,
          descriptionLength
        );
        const p = generateElement('p', 'card-text', 'firstHalf');
        p.innerHTML = firstHalf;
        cardText.appendChild(p);
        cardText.innerHTML = `
                        <p>${firstHalf}<span id="dots" onclick="(function runit (){
                            console.log('clicking')
                            const readMore = document.querySelector('#readMore')
                            // const dots = document.querySelector('#dots')
                            readMore.style.display === 'inline' ? readMore.style.display = 'none' : readMore.style.display = 'inline'

                        })()">...</span><span id="readMore">${secondHalf}</span></p>
                    `;
      }
      const cardLink = generateElement('a', 'link', 'cardLink');
      let artwork;
      if (audiusCardName.artwork) artwork = audiusCardName.artwork['480x480'];
      else artwork = '';

      image.src = artwork;
      cardBody.style.width = '18rem';
      // assetCont.innerHTML = audiusCardName.name
      const button = generateElement('a', 'btn btn-primary', 'button');
      button.setAttribute('href', 'https://audius.co/natekodi');
      button.setAttribute('target', 'external');
      button.innerHTML = 'More on Audius';
      button.style.border = 'none';
      image.addEventListener('click', () =>
        //url for button
        // window.open(audiusCardName.permalink)
        window.open('https://audius.co/natekodi')
      );

      if (audiusCardName.image_url !== '') {
        audiusGrid.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
      }
    }
  }

  const nfts = document.getElementById('header3');
  nfts.insertAdjacentElement('afterend', openseaGrid);

  const music = document.getElementById('audiusHeader3');
  music.insertAdjacentElement('afterend', audiusGrid);
}
