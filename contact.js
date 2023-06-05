const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


function sendEmail(){
    Email.send({
         Host : "smtp.gmail.com",
         Username : "lewandemel12@gmail.com",
         Password : "password",
         To : "levandeviant12@gmail.com",
         From : document.getElementById("email").value,
         Subject : "New Contact FoRM Enquiry",
         Body : "And This Is The Body"
    }).then(
        message => alert(message)
    ); 
}

document.querySelector('img').addEventListener('contextmenu', disableRightClick);
document.addEventListener('contextmenu', disableRightClick);
function disableRightClick(e) {
    e.preventDefault();
}