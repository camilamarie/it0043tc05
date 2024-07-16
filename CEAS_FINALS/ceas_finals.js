document.getElementById('NAVIGATION-TOGGLE').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('showing');
});

var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header nav ul li a');
    

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.NAVIGATION-TOGGLE');
    const navMenu = document.querySelector('header nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});