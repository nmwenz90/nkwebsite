export const outerDiv = document.createElement('div')
outerDiv.setAttribute('class', 'otherWorksContainer row');
export function showWorksImage(src, imgClass, height, alt) {
    const image = document.createElement('img');
    image.setAttribute('src', src);
    image.setAttribute('alt', alt);
    image.setAttribute('title', alt);
    image.setAttribute('class', imgClass);
    height === true ? image.setAttribute('height', '100px' ): console.log('void');
    outerDiv.appendChild(image)
    return image
}