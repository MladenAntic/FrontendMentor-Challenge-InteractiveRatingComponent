const stars = document.querySelectorAll('.star')
const ratings = document.querySelectorAll('.rating')
const selectedRating = document.querySelector('.selected-rating')
const submitBtn = document.querySelector('.submit-btn')

const mainContainer = document.getElementById('main-container')
const thankYou = document.getElementById('thank-you')

const errorMessage = document.querySelector('.error-message')

for (let i = 0; i < 4; i++) {
    stars[i+1].style.display = 'none'
}

// mouseover & mouseout events

ratings[1].addEventListener('mouseover', () => {
    stars[1].style.display = 'inline-block'
})

ratings[1].addEventListener('mouseout', () => {
    stars[1].style.display = 'none'
})

ratings[2].addEventListener('mouseover', () => {
    stars[1].style.display = 'inline-block'
    stars[2].style.display = 'inline-block'
})

ratings[2].addEventListener('mouseout', () => {
    stars[1].style.display = 'none'
    stars[2].style.display = 'none'
})

ratings[3].addEventListener('mouseover', () => {
    stars[1].style.display = 'inline-block'
    stars[2].style.display = 'inline-block'
    stars[3].style.display = 'inline-block'
})

ratings[3].addEventListener('mouseout', () => {
    stars[1].style.display = 'none'
    stars[2].style.display = 'none'
    stars[3].style.display = 'none'
})

ratings[4].addEventListener('mouseover', () => {
    stars[1].style.display = 'inline-block'
    stars[2].style.display = 'inline-block'
    stars[3].style.display = 'inline-block'
    stars[4].style.display = 'inline-block'
})

ratings[4].addEventListener('mouseout', () => {
    stars[1].style.display = 'none'
    stars[2].style.display = 'none'
    stars[3].style.display = 'none'
    stars[4].style.display = 'none'
})

// click events

ratings[0].addEventListener('click', () => {
    ratings[0].style.background = 'var(--orange)'

    ratings[0].addEventListener('mouseout', () => {
        stars[0].style.display = 'inline-block'

        stars[1].style.display = 'none'
        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    // Everyone else

    ratings[1].addEventListener('mouseout', () => {
        stars[0].style.display = 'inline-block'

        stars[1].style.display = 'none'
        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[2].addEventListener('mouseout', () => {
        stars[0].style.display = 'inline-block'

        stars[1].style.display = 'none'
        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[3].addEventListener('mouseout', () => {
        stars[0].style.display = 'inline-block'

        stars[1].style.display = 'none'
        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[4].addEventListener('mouseout', () => {
        stars[0].style.display = 'inline-block'

        stars[1].style.display = 'none'
        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[1].style.background = 'var(--medium-grey)'
    ratings[2].style.background = 'var(--medium-grey)'
    ratings[3].style.background = 'var(--medium-grey)'
    ratings[4].style.background = 'var(--medium-grey)'
})

ratings[1].addEventListener('click', () => {
    stars[1].style.display = 'inline-block'
    ratings[1].style.background = 'var(--orange)'

    ratings[1].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'

        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    // Everyone else 

    ratings[0].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'

        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[2].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'

        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[3].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'

        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[4].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'

        stars[2].style.display = 'none'
        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[0].style.background = 'var(--medium-grey)'
    ratings[2].style.background = 'var(--medium-grey)'
    ratings[3].style.background = 'var(--medium-grey)'
    ratings[4].style.background = 'var(--medium-grey)'
})

ratings[2].addEventListener('click', () => {
    stars[2].style.display = 'inline-block'
    ratings[2].style.background = 'var(--orange)'

    ratings[2].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'

        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    // Everyone else

    ratings[0].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'

        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[1].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'

        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[3].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'

        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[4].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'

        stars[3].style.display = 'none'
        stars[4].style.display = 'none'
    })

    ratings[0].style.background = 'var(--medium-grey)'
    ratings[1].style.background = 'var(--medium-grey)'
    ratings[3].style.background = 'var(--medium-grey)'
    ratings[4].style.background = 'var(--medium-grey)'
})

ratings[3].addEventListener('click', () => {
    stars[3].style.display = 'inline-block'
    ratings[3].style.background = 'var(--orange)'

    ratings[3].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'

        stars[4].style.display = 'none'
    })

    // Everyone else

    ratings[0].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'

        stars[4].style.display = 'none'
    })

    ratings[1].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'

        stars[4].style.display = 'none'
    })

    ratings[2].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'

        stars[4].style.display = 'none'
    })

    ratings[4].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'

        stars[4].style.display = 'none'
    })
    
    ratings[0].style.background = 'var(--medium-grey)'
    ratings[1].style.background = 'var(--medium-grey)'
    ratings[2].style.background = 'var(--medium-grey)'
    ratings[4].style.background = 'var(--medium-grey)'
})

ratings[4].addEventListener('click', () => {
    stars[4].style.display = 'inline-block'
    ratings[4].style.background = 'var(--orange)'

    ratings[4].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'
        stars[4].style.display = 'inline-block'
    })

    // Everyone else

    ratings[0].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'
        stars[4].style.display = 'inline-block'
    })

    ratings[1].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'
        stars[4].style.display = 'inline-block'
    })

    ratings[2].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'
        stars[4].style.display = 'inline-block'
    })

    ratings[3].addEventListener('mouseout', () => {
        stars[1].style.display = 'inline-block'
        stars[2].style.display = 'inline-block'
        stars[3].style.display = 'inline-block'
        stars[4].style.display = 'inline-block'
    })
    
    ratings[0].style.background = 'var(--medium-grey)'
    ratings[1].style.background = 'var(--medium-grey)'
    ratings[2].style.background = 'var(--medium-grey)'
    ratings[3].style.background = 'var(--medium-grey)'
})

submitBtn.addEventListener('click', () => {
    mainContainer.style.display = 'block'
    thankYou.style.display = 'none'
    errorMessage.style.display = 'block'
})

function rating1() {
    selectedRating.innerText = '1'
}

function rating2() {
    selectedRating.innerText = '2'
}

function rating3() {
    selectedRating.innerText = '3'
}

function rating4() {
    selectedRating.innerText = '4'
}

function rating5() {
    selectedRating.innerText = '5'
}

ratings[0].addEventListener('click', () => {
    errorMessage.style.display = 'none'
    submitBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none'
        thankYou.style.display = 'block'
        errorMessage.style.display = 'none'
    })
    rating1()
})

ratings[1].addEventListener('click', () => {
    errorMessage.style.display = 'none'
    submitBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none'
        thankYou.style.display = 'block'
        errorMessage.style.display = 'none'
    })
    rating2()
})

ratings[2].addEventListener('click', () => {
    errorMessage.style.display = 'none'
    submitBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none'
        thankYou.style.display = 'block'
        errorMessage.style.display = 'none'
    })
    rating3()
})

ratings[3].addEventListener('click', () => {
    errorMessage.style.display = 'none'
    submitBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none'
        thankYou.style.display = 'block'
        errorMessage.style.display = 'none'
    })
    rating4()
})

ratings[4].addEventListener('click', () => {
    errorMessage.style.display = 'none'
    submitBtn.addEventListener('click', () => {
        mainContainer.style.display = 'none'
        thankYou.style.display = 'block'
        errorMessage.style.display = 'none'
    })
    rating5()
})