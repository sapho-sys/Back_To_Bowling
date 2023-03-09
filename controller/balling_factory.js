module.exports = function BallingGame(){
    let score = 0;
    function PlayGame(rolls){
       
        let regex = '/\s/g'
        let scoreFrame = rolls.split(' ');
        if(rolls.replace(regex,'') === 'XXXXXXXXXXXX'){
         score = 300;
        }else{
         for(let i = 0; i < scoreFrame.length; i++){
     
             if(i === scoreFrame.length -1){
                 scoreFrame = scoreFrame[i].split('');
     
                 for(let j = 0; j < scoreFrame.length; j++){
                     !isNaN(scoreFrame[j]) && scoreFrame[j + 1]!== '/' ? score = score + 
                     parseInt(scoreFrame[j]) : scoreFrame[j] === 'X' || scoreFrame[j] === '/' ?
                     score = score + 10 : null
                 
                 }
             } else {
                 !isNaN(scoreFrame[i]) ? score = score + parseInt(scoreFrame[i][0]) + 
                 parseInt(scoreFrame[i][1]): scoreFrame[i].includes('X') && !isNaN(scoreFrame[1 + i]) ? score = score + 10 +
                 parseInt(scoreFrame[i + 1][0]) + parseInt(scoreFrame[i + 1][1]):
                 scoreFrame[i].includes('/') && !isNaN(scoreFrame[i + 1]) ? score = score + 10 +
                     parseInt(scoreFrame[i + 1][0]): null
             }
         }
     
        }
        return score;
     
          
     }

     function GetScore(){
        return score;
     }

     return {
        PlayGame,
        GetScore
     }

}


