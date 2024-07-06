function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    var overlay = document.getElementById("overlay");
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
        overlay.classList.remove("show");
    } else {
        menu.style.right = "0px";
        overlay.classList.add("show");
    }
}

function closeMenu() {
    var menu = document.getElementById("mobile-menu");
    var overlay = document.getElementById("overlay");
    menu.style.right = "-250px";
    overlay.classList.remove("show");
}

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var menuItems = document.querySelectorAll('.menu a');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            menuItems.forEach(function(item) {
                item.classList.remove('actual-section');
                if (item.getAttribute('href').substring(1) === section.id) {
                    item.classList.add('actual-section');
                }
            });
        }
    });
});
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var menuItems = document.querySelectorAll('.desktop-menu li a');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            menuItems.forEach(function(item) {
                item.classList.remove('actual-section');
                if (item.getAttribute('href').substring(1) === section.id) {
                    item.classList.add('actual-section');
                }
            });
        }
    });
});