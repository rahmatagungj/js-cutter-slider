let slideOne = document.getElementById('slider-one')
let slideTwo = document.getElementById('slider-two')


const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

window.addEventListener('scroll', () => {
  // console.log(slideOne.style.transform);
  // slideOne.style.transform = `translateX(${getScrollPosition(content).x}px)`
  slideOne.style.transform = `translate3d(${getScrollPosition(window).y + 50}px, 0px, 0px)`
  slideTwo.style.transform = `translate3d(-${getScrollPosition(window).y + 50}px, 0px, 0px)`
})