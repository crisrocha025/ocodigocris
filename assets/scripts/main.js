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

//Menu Templates
const menu_toggle_templates = document.querySelector('.menu_toggle_templates')
const menu_templates = document.querySelector('.menu_templates')
menu_toggle_templates.addEventListener('click',() => {
	menu_toggle_templates.classList.toggle('menu_toggle_templates_active')
	menu_templates.classList.toggle('menu_templates_active')
})
 
let link_active = document.querySelectorAll('.menu_templates ul li')
const templates_container = document.querySelector('.templates_content')
const template_item = document.querySelectorAll('.templates_content #item')

template_item.forEach(el => {
	el.classList.add('show_item')
})

link_active.forEach(item => {
	item.addEventListener('click', () =>{
		let activeClass = document.querySelector('.active')
		activeClass.className = activeClass.className.replace("active","")
		item.className += "active"

		menu_toggle_templates.classList.toggle('menu_toggle_templates_active')
		menu_templates.classList.toggle('menu_templates_active')

		template_item.forEach(el => {
			el.classList.remove('show_item')
		})
		
			template_item.forEach(elem => {
				if(item.innerText.toUpperCase() === "BLOGGER"){
					if(elem.classList.value === "blogger"){
						elem.classList.add('show_item')	
					}else{
						elem.classList.remove('show_item')
					}
				}else if(item.innerText.toUpperCase() === "RESPONSIVOS"){
					if(elem.classList.value === "responsivos"){
						elem.classList.add('show_item')	
					}else{
						elem.classList.remove('show_item')
					}
				}else if(item.innerText.toUpperCase() === "WORDPRESS"){
					if(elem.classList.value === "wordpress"){
						elem.classList.add('show_item')	
					}else{
						elem.classList.remove('show_item')
					}
				}else if(item.innerText.toUpperCase() === "PREMIUM"){
					if(elem.classList.value === "premium"){
						elem.classList.add('show_item')	
					}else{
						elem.classList.remove('show_item')
					}
				}else{
					elem.classList.add('show_item')
				}
			})
		
	})
})
