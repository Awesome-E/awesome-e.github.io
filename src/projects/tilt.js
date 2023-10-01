import VanillaTilt from 'vanilla-tilt';
const elements = document.querySelectorAll('.project-card');
if (matchMedia('(any-pointer: fine)').matches) VanillaTilt.init(elements, {
  'reverse': true,
  'perspective': 4000,
  'glare': true,
  'max-glare': 0.2,
  'gyroscope': false,
})
