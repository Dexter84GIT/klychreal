export const featured = () => {
  const cards = document.querySelectorAll('.featuredSlide')

  if (!cards.length) return

  cards.forEach((card) => {
    const sliderEl = card.querySelector('.img')
    const wrapper = sliderEl?.querySelector('.swiper-wrapper')
    const slides = wrapper?.querySelectorAll('.swiper-slide') || []
    const prev = card.querySelector('.prevBtn')
    const next = card.querySelector('.nextBtn')
    const currentEl = card.querySelector('.count .current')
    const totalEl = card.querySelector('.count .all')

    if (!sliderEl || !wrapper || !slides.length) return

    sliderEl.classList.add('swiper')

    const swiper = new Swiper(sliderEl, {
      loop: true,
      slidesPerView: 1,
      navigation: { prevEl: prev, nextEl: next },
      on: {
        init(sw) {
          if (totalEl) totalEl.textContent = slides.length
          if (currentEl) currentEl.textContent = sw.realIndex + 1
        },
        slideChange(sw) {
          if (currentEl) currentEl.textContent = sw.realIndex + 1
        },
      },
    })
  })
}
