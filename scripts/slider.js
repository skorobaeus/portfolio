const sliders = document.querySelectorAll('.slider')

sliders.forEach((slider) => {

    const slides = slider.querySelectorAll('.slide')
    const prevButton = slider.querySelector('.button-prev')
    const nextButton = slider.querySelector('.button-next')
    const slideCount = slides.length
    const activeSlides = 'slide-active'
    const inactiveButton = 'aria-disabled'
    let currentSlide = 0

    prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--
        updateSlider()
    }
    })

    nextButton.addEventListener('click', () => {
    if (currentSlide < slideCount - 1) {
        currentSlide++
        updateSlider()
    }
    })

    function updateSlider() {
        slides.forEach((slide, index) => {
            if(index === currentSlide) {
            slide.classList.add(activeSlides)
            } else {
            slide.classList.remove(activeSlides)
            }
        })

        prevButton.setAttribute(inactiveButton, currentSlide === 0)
        nextButton.setAttribute(inactiveButton, currentSlide === slideCount - 1)
    }

})