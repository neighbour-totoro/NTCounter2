let display = document.getElementById('counter')
let addBtn = document.getElementById('increaseBtn')
let counter = localStorage.getItem('NTCouner') | 0
console.log(counter);



function updateDisplay(){
    display.textContent = counter
}

addBtn.addEventListener('click', ()=>{
     counter++;
     localStorage.setItem('NTCounter', counter)
     updateDisplay()
})