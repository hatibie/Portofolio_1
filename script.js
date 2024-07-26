
    var typed = new Typed("#input", {
      strings: ["Web Developer.", "Content Creator."],
      typeSpeed: 80,
      backspeed: 70,
      loop:true
    });

    let menu = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".nav-list");

    menu.onclick = () => {
        menu.classList.toggle("bx-x")
        navlist.classList.toggle("open")
    }

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 90)
    });

    window.onscroll = () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
  };

  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(".hero-text, .skills-content, .mid-left", { origin: 'left' });
  ScrollReveal().reveal(".hero-img, .mid-right", { origin: 'right' });
  ScrollReveal().reveal(".scroll, .portofolio-btn, .pricing-content", { origin: 'bottom' });
  ScrollReveal().reveal(".mid-text", { origin: 'top' });
  ScrollReveal().reveal(".services-content, .portofolio-content, .contact-content", { origin: 'right' });