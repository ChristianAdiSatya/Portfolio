//navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }   else {
        header.classList.remove('navbar-fixed');
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

navMenu.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//typewriter
const words = ["Front End Developer", "Coder", "Phone Technician", "CCTV Technician"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;
        
        function type() {
            currentWord = words[i];
            if (isDeleting) {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
                j--;
                if (j == 0) {
                isDeleting = false;
                i++;
                if (i == words.length) {
                i = 0;
                }
            }
            } else {
                document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
                j++;
                if (j == currentWord.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 130);
        }
        
        type();