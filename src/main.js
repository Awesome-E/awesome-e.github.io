document.body.ontouchstart = () => {}
const sidenav = document.querySelectorAll('.sidenav, .overlay')
sidenav.forEach(el => el.addEventListener('touchmove', e => {
  // Prevent Scrolling for now
  if (el.scrollHeight <= el.offsetHeight) e.preventDefault()
}))
