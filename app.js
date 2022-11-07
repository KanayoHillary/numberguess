//Game Values
let min = 1,
    max = 10,
    winningNumber = Math.ceil(Math.random()*10),
    // winningNumber = Math.random()*(max-min+1)+min,

    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),    
      guessInput = document.querySelector('#guess-input'),    
      message= document.querySelector('.message');

      //Assign UI Min and Max
      minNum.textContent= min;
      maxNum.textContent= max;

guessBtn.addEventListener('click',function(e){
    console.log(winningNumber)
    guess = parseInt(guessInput.value);
    //Validate the input 
    if (isNaN(guess) || guess<min || guess > max) {
        setMessage('Please enter a number between ' + min + ' and ' + max+'', 'red');
        guessInput.value = ' ';
    };

    if (guess === winningNumber) {
        optimize(true);
        setMessage('YOU WIN! '+ guess + ' is correct','green')
        pageReload();
        
    }else if(guess !== winningNumber && typeof(guess)==='number' && guess>=min && guess <= max){
        guessesLeft -=1;
        if (guessesLeft === 0 ) {
            setMessage('Game over, you are out of guesses, the correct number was '+ winningNumber, 'red');
            optimize(false);
            pageReload();
            
        }else {
            guessInput.style.borderColor = 'red';
            guessInput.value = ' ';
            setMessage('Incorrect, '+ guessesLeft+ ' guess(es) left','red')

        }
        e.preventDefault();

    }
});


function setMessage(msg,color){
    message.textContent = msg;
    message.style.color =color;
}

function optimize(won){
    let color;
    won === true? color = 'green': color='red';  //TERNARY OPERATOR

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessBtn.value='Play Again';
    // guessBtn.className = 'play-again';
}
// game.addEventListener('mousedown',function(e){
//     if(e.target.className === 'play-again'){
//         window.location.reload();
//     }
// })


function pageReload(){
    guessBtn.addEventListener('click',function(){window.location.reload()});
}



// input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       document.getElementById("myBtn").click();
//     }
//   });

