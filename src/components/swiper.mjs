const sliders = () => {
  const partnersSlider = document.querySelector('.partnersSlider')

  if (!partnersSlider) return

  new Swiper(partnersSlider, {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: '.partnersSlider .next',
      prevEl: '.partnersSlider .prev',
    },
  })

  const objectMain = document.getElementById('objectMain')

  if (!objectMain) return

}

export default sliders
