/* Menu Dropdown */
const dropdown = document.querySelector('.dropdown')
const sub_menu = document.querySelector('.sub_menu')
dropdown.addEventListener('click', () => {
	sub_menu.classList.toggle('sub_menu_active')
	dropdown.classList.toggle('dropdown_active')
})
/* Menu Toggle */
const menu_toggle = document.querySelector('.menu_toggle')
const header = document.querySelector('.header2')
menu_toggle.addEventListener('click', () => {
	header.classList.toggle('header_active')
	menu_toggle.classList.toggle('menu_toggle_active')
})


//Anima ao scroll
const debounce = function (func, wait, immediate) {
	let timeout
	return function (...args) {
	  const context = this
	  const later = function () {
		timeout = null
		if (!immediate) func.apply(context, args)
	  }
	  const callNow = immediate && !timeout
	  clearTimeout(timeout)
	  timeout = setTimeout(later, wait)
	  if (callNow) func.apply(context, args)
	}
  }
  
  const target = document.querySelectorAll('[data-anime]')
  
  function animeScroll () {
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
	target.forEach(element => {
	  if (windowTop > element.offsetTop) {
		element.classList.add('animate')
	  } else {
		element.classList.remove('animate')
	  }
	})
  }
  
  animeScroll()
  
  if (target.length) {
	window.addEventListener('scroll', debounce(() => {
	  animeScroll()
	}, 200))
  }