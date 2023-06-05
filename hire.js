    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })

    document.querySelector('img').addEventListener('contextmenu', disableRightClick);
document.addEventListener('contextmenu', disableRightClick);
function disableRightClick(e) {
    e.preventDefault();
}

document.querySelector('img').addEventListener('contextmenu', disableRightClick);
document.addEventListener('contextmenu', disableRightClick);
function disableRightClick(e) {
    e.preventDefault();
}