function answersCorrectness(question,answer){
    if(question.rightAnswer === answer){
        return 1;   //Rigth answer
}        
    return 0; //Bad answer
}


module.exports = answersCorrectness;
