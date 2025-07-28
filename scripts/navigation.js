// const navButtons = document.querySelectorAll('.nav-button')
// const articles = document.querySelectorAll('.portfolio-item')
const buttonClose = document.querySelector('.button-close-nav')
const buttonOpen = document.querySelector('.button-open-nav')
const nav = document.querySelector('nav')
// const buttonActive = 'nav-button-active'
// const articleActive = 'portfolio-item-active'
const navClosed = 'closed'
const navOpened = 'opened'

// navButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         navButtons.forEach((button) => {
//             button.classList.remove(buttonActive)
//         })
//         button.classList.toggle(buttonActive)

//         articles.forEach((article) => {
//             if (article.id === `${button.id}-content`) {
//                 article.classList.add(articleActive)
//             } else {
//                 article.classList.remove(articleActive)
//             }
//         })

//         window.scrollTo({
//             top: 0
//         })        
//     })
// })

buttonClose.addEventListener('click', () => {
    nav.classList.add(navClosed)
    nav.classList.remove(navOpened)
})

buttonOpen.addEventListener('click', () => {
    nav.classList.add(navOpened)
    nav.classList.remove(navClosed)
})

// window.addEventListener('scroll', () => {
//     const visibleArticles = Array.from(articles).filter(article =>
//         article.classList.contains('portfolio-item-active')
//     )
//     const lastVisible = visibleArticles[visibleArticles.length - 1]
//     const rect = lastVisible.getBoundingClientRect()

//     if (rect.bottom <= window.innerHeight + 10) {
//         const currentIndex = Array.from(articles).indexOf(lastVisible)
//         const next = articles[currentIndex + 1]

//         if (next && !next.classList.contains('portfolio-item-active')) {
//             next.classList.add('portfolio-item-active')
//         }
//     }
// })

const navButtons = document.querySelectorAll('.nav-button')
const articles = document.querySelectorAll('.portfolio-item')

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const articleId = `${button.id}-content`
        const article = document.getElementById(articleId)

        if (article && !article.classList.contains('portfolio-item-active')) {
            article.classList.add('portfolio-item-active')
        }

        const main = document.querySelector('main')
        const mainStyles = window.getComputedStyle(main)
        const mainPaddingTop = parseInt(mainStyles.paddingTop) || 0

        const articleTop = article.getBoundingClientRect().top + window.pageYOffset

        window.scrollTo({
            top: articleTop - mainPaddingTop,
            behavior: 'smooth'
        })
    })
})

window.addEventListener('scroll', () => {
    const visibleArticles = Array.from(articles).filter(article =>
        article.classList.contains('portfolio-item-active')
    )
    const lastVisible = visibleArticles[visibleArticles.length - 1]
    const rect = lastVisible.getBoundingClientRect()

    if (rect.bottom <= window.innerHeight + 10) {
        const currentIndex = Array.from(articles).indexOf(lastVisible)
        const next = articles[currentIndex + 1]

        if (next && !next.classList.contains('portfolio-item-active')) {
            next.classList.add('portfolio-item-active')
        }
    }
})

window.addEventListener('scroll', () => {
    const visibleArticles = Array.from(articles).filter(article =>
        article.classList.contains('portfolio-item-active')
    )

    const currentArticle = visibleArticles.find((article) => {
        const rect = article.getBoundingClientRect()
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
    })

    if (currentArticle) {
        const currentId = currentArticle.id.replace('-content', '')
        navButtons.forEach((btn) => {
            if (btn.id === currentId) {
                btn.classList.add('nav-button-active')
            } else {
                btn.classList.remove('nav-button-active')
            }
        })
    }
})
