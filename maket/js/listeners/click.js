export default event => {
    if (event.target.closest('#headerBurger')) {
        const burger = event.target.closest('#headerBurger');
        const header = document.getElementById('header');

        if (!header.className.includes('blur')) {
            document.body.style = 'overflow: hidden; height: 100vh;';
        } else {
            console.log('sd');
            document.body.style = '';
        }
        burger.classList.toggle('active');
        header.classList.toggle('blur');
    }

    if (event.target.closest('#payBtn')) {
        const payPopap = document.getElementById('payPopap');
        payPopap.classList.toggle('active');
    }

    if (event.target.closest('#brandsBtn')) {
        const brandsMain = document.getElementById('brandsMain');
        const brandsArrow = document.getElementById('brandsArrow');

        brandsMain.classList.toggle('active');
        brandsArrow.classList.toggle('active');
    }

    if (event.target.closest('#footerBtn')) {
        const footerText = document.getElementById('footerText');
        footerText.classList.toggle('hidden');
    }

    if (event.target.closest('#footerLink')) {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};
