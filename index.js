(function () {
   // ------------- all variable
let colors =  [];
let pickedColor ;
let squareNum = 6;
const h_1 = document.getElementById('h-1'); 
const colorDisplay = document.getElementById('color-display'); 
const square = document.querySelectorAll('.square');
const resetBtn = document.getElementById('reset');
const easyBtn = document.getElementById('easy');
const hardBtn = document.getElementById('hard');
const msg = document.getElementById('message'); 
const modeBtn = document.querySelectorAll('.mode');


//  the initialization function
function init() {
    reset();
    // for detecting color 
    for (let i = 0; i < colors.length; i++) {

        square[i].style.backgroundColor = colors[i]
        square[i].addEventListener('click', function() {
              let clickedSquare = this.style.backgroundColor;
            
            if (clickedSquare === pickedColor) {
                msg.textContent = 'Correct!';
                h_1.style.backgroundColor = pickedColor;
                resetBtn.textContent = 'Play Again ?'
                colorBackground(pickedColor);
            } else {
                this.style.backgroundColor = 'aliceblue';
                msg.textContent = 'Wrong!!!'; 
            }
    
    
    
        })
    }
    // for mode button 

    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function() {
        easyBtn.classList.remove('selected')
        hardBtn.classList.remove('selected')
        this.classList.add("selected");
        squareNum = (modeBtn[i].textContent === 'Easy') ? 3 : 6 ; 
        reset();
        for (let i = 0; i < square.length; i++) {
           if (colors[i]) {
           square[i].style.display = 'block';
           square[i].style.backgroundColor = colors[i]
           } else {
            square[i].style.display = 'none';
           }
        }
    
    
        })
    }

}
init();
    

// reset  function

function reset() {
    colors = colorGenerator(squareNum);
    pickedColor= chooseColor();
    colorDisplay.textContent = pickedColor;
    msg.textContent = `Let's Play`
    resetBtn.textContent = 'New Colors'
    h_1.style.backgroundColor = '#252525';
}


resetBtn.addEventListener('click', function() { 
    reset();
     for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i]
     }
})


function chooseColor() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function colorBackground(color) {
    for (let i = 0; i < colors.length; i++) {
        square[i].style.backgroundColor = color;
    }
}
 

function colorGenerator(num) {
    const colors = [];  
    for (let i = 0; i < num; i++) {
        const randomColor = rgbMaker();
        colors.push(randomColor);
    }
    return colors;
}

function rgbMaker() {
       const r = Math.floor(Math.random() * 256);
       const g = Math.floor(Math.random() * 256);
       const b = Math.floor(Math.random() * 256);

       return `rgb(${r}, ${g}, ${b})`;
       
}
 
})();