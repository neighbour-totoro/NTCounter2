let display = document.getElementById('counter')
let updated = document.getElementById('lastUpdate')
let addBtn = document.getElementById('increaseBtn')
let resetBtn = document.getElementById('resetBtn')
let counter = 0
let lastUpd = null
counter = localStorage.getItem('tmr_value') | 0

updateDisplay()

function updateDisplay() {
    if (!localStorage.getItem('lastUpd')){
        document.getElementById('upd').style.display = 'none'
    } else {
        document.getElementById('upd').style.display = 'flex'
    }
    updated.textContent = localStorage.getItem('lastUpd')
    display.textContent = counter
}


// For todays date;
Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}



addBtn.addEventListener('click', () => {
    counter++;
    localStorage.setItem('tmr_value', counter)
    localStorage.setItem('lastUpd', "LastSync: " + new Date().today() + "  " + new Date().timeNow())
    updateDisplay()
})

resetBtn.addEventListener('click', () => {
    counter = 0;
    lastUpd = 'Нет обновлений'
    localStorage.removeItem('tmr_value')
    localStorage.removeItem('lastUpd')
    updateDisplay()
})