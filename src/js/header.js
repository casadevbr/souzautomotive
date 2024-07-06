document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    if (!header) {
        console.error('Elemento de header não encontrado no DOM.');
        return;
    }

    const headerHeight = header.offsetHeight;
    document.querySelector('#inicio').style.paddingTop = `${headerHeight}px`;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.getElementById('header');

//     if (!header) {
//         console.error('Elemento de header não encontrado no DOM.');
//         return;
//     }

//     const headerHeight = header.offsetHeight;
//     document.body.style.paddingTop = `${headerHeight}px`;

//     let lastScrollTop = 0;

//     window.addEventListener('scroll', function() {
//         const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//         if (currentScroll > lastScrollTop) {
//             // Scrolling down
//             header.style.top = `-${headerHeight}px`;
//         } else {
//             // Scrolling up
//             header.style.top = '0';
//         }

//         lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
//     });
// });