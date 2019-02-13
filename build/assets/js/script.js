mcroyal = () => {
    const mcroyal = document.querySelector('.mcroyal'),
        nav = document.querySelector('nav');

    mcroyal.addEventListener('click', function () {
        mcroyal.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

mcroyal();