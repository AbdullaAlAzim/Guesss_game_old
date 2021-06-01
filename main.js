const p1scoreDisplay = document.getElementById('p1score');
const p2scoreDisplay = document.getElementById('p2score');


const wscodeDisplay = document.querySelector('p span');


const inputScore = document.getElementById('inputScope');


const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameover = false;


p1Btn.addEventListener('click', () => {
    //console.log('clicked player 1')

        //data change
        if(!gameover){
            p1Score++;
            winner(p1Score,winingScore)
            //show change data
            p1scoreDisplay.textContent = p1Score;

        }
        
});
 p2Btn.addEventListener('click', () => {

    //console.log('clicked player 2')
    if(!gameover){

        p2Score++;

        winner(p2Score,winingScore)
        //show change data
        p2scoreDisplay.textContent = p2Score;

    }
   
})



inputScore.addEventListener('change', () => {

       // console.log(typeof inputScore.value);
        winingScore = Number(inputScore.value);
        wscodeDisplay.textContent = inputScore.value;

        inputScore.value = ''
        reset();
    
});



function reset(){

        p1Score = 0;
        p2Score = 0;
        gameover =  false;
        p1scoreDisplay.textContent = 0;
        p2scoreDisplay.textContent = 0;
        p1Btn.removeAttribute('disabled');
        p2Btn.removeAttribute('disabled');
    

}
resetBtn.addEventListener('click', reset);



function winner(oldScore, winingScore){
    if(oldScore === winingScore){
        gameover = true;
         p1Btn.setAttribute('disabled',  'disabled');
         p2Btn.setAttribute('disabled',  'disabled');
    }
}







