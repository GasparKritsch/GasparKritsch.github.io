function navSlide () {

    const burgerMenu = document.getElementById('burger')
    const nav = document.querySelector('.nav_links')
    const navLinks = document.querySelectorAll('.nav-link')

    burgerMenu.addEventListener('click', ()=> {
        nav.classList.toggle('nav_active')
    })
    
    navLinks.forEach( link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav_active')
        })
    })
    
}   

navSlide()