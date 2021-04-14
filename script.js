'use strict';

const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    for (let j = 0; j < question.length; j++) {
      answer[j].classList.add('hidden');
    }
    if (answer[i].classList.contains('hidden'))
      answer[i].classList.remove('hidden');
    else answer[i].classList.add('hidden');
  });
}
