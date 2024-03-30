let noBtn = document.querySelector('#noButton')

let random = (min, max) => {
    let rand = min+Math.random()*( max-min + 1)
    return Math.floor(rand)
}

noBtn.addEventListener('mouseenter', () => {
    noBtn.style.left = `${random(0, 90)}%`
    noBtn.style.top = `${random(0, 90)}%`
})