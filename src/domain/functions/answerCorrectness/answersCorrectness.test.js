const answerCorrectness = require('./answersCorrectness')


test('Properly checks if answers is correct',()=>{
    const question={
"image": "base64imagestring",
"answers": ["Luke Skywalker", "Leia Organa", "Darth Vader", "Darth Sidious"],
"rightAnswer": "Darth Vader"
};
const answer="Darth Vader";
const answer2="Darth Vade";
const answer3="";
    
    expect(answerCorrectness(question,answer)).toBe(1);
    expect(answerCorrectness(question,answer2)).toBe(0);
    expect(answerCorrectness(question,answer3)).toBe(0);
    
})

