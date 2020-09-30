//HTML elements
 const statusDiv=document.querySelector('.status');
 const resetDiv=document.querySelector('.reset');
 const cellDivs=document.querySelectorAll('.game-cell');
 //game constants
 const xSymbol='x';
 const oSymbol='o';
 //game variables
 let gameIsLive=true;
 let xIsNext=true;
 let winner=null;
 //function
 const checkGameStatus=() => {
     const topLeft =cellsDiv[0].classList[2];
     const topMiddle =cellsDiv[1].classList[2];
     const topRight =cellsDiv[2].classList[2];
     const middleLeft =cellsDiv[3].classList[2];
     const middleMiddle =cellsDiv[4].classList[2];
     const MiddleRight =cellsDiv[5].classList[2];
     const bottomleft =cellsDiv[6].classList[2];
     const bottomMiddle =cellsDiv[7].classList[2];
     const bottomRight =cellsDiv[8].classList[2];
     //determine winner not working for now!!
     if(topLeft && topLeft === topMiddle && topLeft===topRight)
     gameIsLive=false;
     winner=topLeft;
     statusDiv.innerHTML=`${topLeft} has won`;
 }
    


 //events Handlers
 const handleReset=(e)=> {
     console.log(e);
 }; 
 const handleCellClick=(e)=>{
     const classList = e.target.classList;
     const location =classList[1];
     if(classList[2]=='x'|| classList== 'o'){
         return;
     }
     if (xIsNext){
       classList.add('x');
         xIsNext= !xIsNext;
     }else{
         classList.add('o');
         xIsNext=!xIsNext;
     } 
 } 
 
 //eventlisteners
 resetDiv.addEventListener('click', handleReset);
 for(const cellDiv of cellDivs){
     cellDiv.addEventListener('click',handleCellClick ) 
 }



