const wrapperElement = document.querySelector('.ken');
const imageLinks = [
  './images/img-1.jpeg',
  './images/img-1.jpeg',
  './images/img-1.jpeg',
  './images/img-2.jpg',
  './images/img-3.avif',
  './images/img-3.avif',
  './images/img-3.avif',
  './images/img-4.jpg',
  './images/img-5.jpg',
  './images/img-5.jpg',
  './images/img-5.jpg',
  './images/img-6.jpg',
  './images/img-7.jpg',
  './images/img-7.jpg',
  './images/img-7.jpg',
  './images/img-8.jpg',
  //   './images/img-9.jpg',
  './images/img-10.jpg',
  './images/img-11.jpg',
  './images/img-12.jpg',
  './images/img-12.jpg',
  './images/img-12.jpg',
  './images/img-13.jpg',
  './images/img-13.jpg',
  './images/img-13.jpg',
  './images/img-14.jpg',
  './images/img-14.jpg',
  './images/img-14.jpg',
  './images/img-15.jpg',
  './images/img-16.jpg',
  './images/img-16.jpg',
  './images/img-16.jpg',
  //   './images/img-17.jpg',
  './images/img-18.jpg',
  './images/img-18.jpg',
];

let randomBackground =
  imageLinks[Math.floor(Math.random() * imageLinks.length)];

wrapperElement.style.backgroundImage = 'url(' + randomBackground + ')';
