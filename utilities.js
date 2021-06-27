export const outerDiv = document.createElement('div');

outerDiv.setAttribute('class', 'otherappsContainer row');

export function showappsImage(src, imgClass, height, alt) {
  const image = document.createElement('img');
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);
  image.setAttribute('title', alt);
  image.setAttribute('class', imgClass);
  height === true ? image.setAttribute('height', '100px') : console.log('void');
  outerDiv.appendChild(image);
  return image;
}

export function generateElement(element, className, id) {
  // console.log('generating')
  const currEl = document.createElement(element);
  currEl.setAttribute('class', className), currEl.setAttribute('id', id);
  // console.log('current el', currEl)
  return currEl;
}
