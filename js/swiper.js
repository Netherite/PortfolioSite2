const swiper = new Swiper('.swiper', {
  /*effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  }, */
    direction: 'horizontal',
    loop: true,
    speed: 700,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    on: {
      click(event) {
        console.log('clickd');
        this.slideNext();
      },
    },


  });

  //swiper.slideNext
  