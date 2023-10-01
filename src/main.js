import VanillaTilt from 'vanilla-tilt';
const elements = document.querySelectorAll('.project-card');
if (matchMedia('(any-pointer: fine)').matches) VanillaTilt.init(elements, {
  'reverse': true,
  'perspective': 4000,
  'glare': true,
  'max-glare': 0.2,
  'gyroscope': false,
})

document.body.ontouchstart = () => {}
const sidenav = document.querySelectorAll('.sidenav, .overlay')
sidenav.forEach(el => el.addEventListener('touchmove', e => {
  // Prevent Scrolling for now
  if (el.scrollHeight <= el.offsetHeight) e.preventDefault()
}))
