 const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      navbar.classList.toggle('active');
    };

    // Close navbar when clicking on nav links
    document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });

    // Sticky header on scroll
    window.onscroll = () => {
      const header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
    };
      document.getElementById('year').textContent = new Date().getFullYear();