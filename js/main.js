const toggleButton  = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  //Take navbarLinks, access all the classes on it, and toggle the active class
  navbarLinks.classList.toggle('active')//if active class doesn't exist, it will add it. If it does exist, it will remove it

})

