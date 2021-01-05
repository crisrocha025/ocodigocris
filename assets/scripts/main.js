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