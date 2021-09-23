const checkToggle = document.querySelector('#theme-toggle')

checkToggle.addEventListener('input', e => {
    document.body.classList.toggle('light')
})