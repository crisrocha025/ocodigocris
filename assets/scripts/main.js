/* Menu Nav */
const links = document.querySelectorAll('.menu ul li')

links.forEach((link,ind,linkss) => {
	link.addEventListener('click',() =>{
		linkss[ind].classList.add('link_active')
		for(let i=0;i<linkss.length;i++){
			if(i != ind){
				linkss[i].classList.remove('link_active')
			}
			
		}
	})
})