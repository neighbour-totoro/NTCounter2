let display = document.getElementById('counter')
let addBtn = document.getElementById('increaseBtn')
let resetBtn = document.getElementById('resetBtn')
let counter = 0
counter = Number(localStorage.getItem('NTCounter')) | 0
updateDisplay()

function updateDisplay(){
    display.textContent = counter
}

addBtn.addEventListener('click', ()=>{
     counter++;
     localStorage.setItem('NTCounter', counter)
     updateDisplay()
})

resetBtn.addEventListener('click', ()=>{
    counter = 0;
    localStorage.setItem('NTCounter', counter)
    updateDisplay()
})