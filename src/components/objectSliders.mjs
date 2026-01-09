const objectSliders = () => {
    const objectThumbs = document.getElementById('objectThumbs')

    if (objectThumbs) {
        new Swiper(objectThumbs, {
            loop: true,
            direction: "vertical",
            spaceBetween: 10,
            slidesPerView: 3,
            navigation: {
                nextEl: '.thumbs .nextBtn',
                prevEl: '.thumbs .prevBtn',
            },
        })
    }
}

export default objectSliders