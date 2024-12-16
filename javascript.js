/* Variables for Google Ubuntu Fonts.  Gotta love some Ubuntu */
const G10 = document.createElement('link');
G10.href = 'https://fonts.googleapis.com';
G10.rel = 'preconnect';

const G11 = document.createElement('link');
G11.href = 'href="https://fonts.gstatic.com';
G11.rel = 'preconnect';

const G12 = document.createElement('link');
G12.href = 'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap';
G12.rel = 'stylesheet';

/* add the Ubuntu fonts to the head element.  Because WE NEED more fonts in our lives */

document.getElementsByTagName('head')[0].appendChild(G10);
document.getElementsByTagName('head')[0].appendChild(G11);
document.getElementsByTagName('head')[0].appendChild(G12);
