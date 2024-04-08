// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });
  
  // room container
  ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // service container
  ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
  });