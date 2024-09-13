let num = 0;
let numTag = document.getElementById('num');
let btnInc = document.getElementById('btn-inc');
let btnDec = document.getElementById('btn-dec');
let btnToggle = document.getElementById('btn-clk-toggle');
let btnClr = document.getElementById('btn-clk-clear');
let autoClickInterval = null;

// Updated Counter in UI
function updtNum() {
    numTag.textContent = num;
}

// Manual Clicker -> Increment
btnInc.addEventListener('click', function () {
    num = num + 1;
    updtNum();
});

// Manual Clicker -> Decrement
btnDec.addEventListener('click', function () {
    num = num - 1;
    updtNum();
});

// Auto Clicker -> Start and Stop Toggle
btnToggle.addEventListener('click', function () {
    if (!autoClickInterval) {
        autoClickInterval = setInterval(function () {
            num = num + 1;
            updtNum();
        }, 1); // auto-clicking every 1 ms
        btnToggle.textContent = 'STOP'; // Change button text
    } else {
        // Stop auto-clicking
        clearInterval(autoClickInterval);
        autoClickInterval = null;
        btnToggle.textContent = 'START'; // Change button text back
    }
});

// Clear Display
btnClr.addEventListener('click', function(){
    num = 0;
    updtNum();
});

// KEYSTROKES -> Space bar for start and stop toggle
document.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        // Simulate a click on the toggle button
        btnToggle.click();
        e.preventDefault(); // Prevent default space bar behavior (scrolling)
    }
});

// KEYSTROKES -> Arrow UP and DOWN for increment and decrement
document.addEventListener('keydown', function (e){
    if (e.key === 'ArrowUp' || e.key === '+') {
        btnInc.click();
    } 
    else if (e.key === 'ArrowDown' || e.key === '-') {
        btnDec.click();
    }
});

// KEYSTROKES -> C for clearing the counter
document.addEventListener('keydown', function (e){
    if (e.key === 'c' || e.key === 'C') {
        btnClr.click();
    }
});

