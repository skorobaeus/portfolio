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
        syncDialogButtonsForIndex(currentSlide)
    }
    })

    nextButton.addEventListener('click', () => {
    if (currentSlide < slideCount - 1) {
        currentSlide++
        updateSlider()
        syncDialogButtonsForIndex(currentSlide)
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

    const thumbs = slider.querySelectorAll('.slide img')
    const dialogByIndex = []
    thumbs.forEach((img, i) => {
        const src = img.getAttribute('src')
        const dlgImg = document.querySelector(`dialog img.fullsize[src="${CSS.escape(src)}"]`)
        if (dlgImg) {
            const dlg = dlgImg.closest('dialog')
            dialogByIndex[i] = dlg

            const dlgPrev = dlg.querySelector('.button-prev')
            const dlgNext = dlg.querySelector('.button-next')

            if (dlgPrev) {
                dlgPrev.addEventListener('click', () => {
                    if (i > 0) {
                        openDialogAt(i - 1)
                    }
                })
            }

            if (dlgNext) {
                dlgNext.addEventListener('click', () => {
                    if (i < slideCount - 1) {
                        openDialogAt(i + 1)
                    }
                })
            }
        }
    })

    function closeAllDialogsInGroup() {
        dialogByIndex.forEach(d => {
            if (d && d.open) d.close()
        })
    }

    function setDialogArrowsState(dlg, index) {
        if (!dlg) return
        const dlgPrev = dlg.querySelector('.button-prev')
        const dlgNext = dlg.querySelector('.button-next')
        if (dlgPrev) dlgPrev.setAttribute(inactiveButton, index === 0)
        if (dlgNext) dlgNext.setAttribute(inactiveButton, index === slideCount - 1)
    }

    function openDialogAt(index) {
        const dlg = dialogByIndex[index]
        if (!dlg) return
        closeAllDialogsInGroup()
        dlg.showModal()
        currentSlide = index
        updateSlider()
        setDialogArrowsState(dlg, index)
    }

    function syncAfterInlineOpen(index) {
        const dlg = dialogByIndex[index]
        if (!dlg) return
        currentSlide = index
        updateSlider()
        setDialogArrowsState(dlg, index)
    }

    thumbs.forEach((img, i) => {
        img.addEventListener('click', () => {
            setTimeout(() => {
                const dlg = dialogByIndex[i]
                if (dlg && dlg.open) {
                    syncAfterInlineOpen(i)
                }
            }, 0)
        })
    })

})