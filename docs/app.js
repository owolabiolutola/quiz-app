const correctAnswers=['A', 'B' , 'B',  'B'  ];

const form= document.querySelector('.quiz-form');

const display = document.querySelector('.display');


form.addEventListener('submit', e =>{
e.preventDefault();

let score = 0;

const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//check Answers

userAnswers.forEach((answer,index) => {
if(answer=== correctAnswers[index]){
score += 25; 

}

});

scrollTo(0,0);
display.querySelector('span').textContent = `${score}%`;
display.classList.remove('hidden');


});

