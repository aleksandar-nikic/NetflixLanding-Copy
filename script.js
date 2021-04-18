"use strict";

const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
  $(question[i]).click(function () {
    for (let j = 0; j < question.length; j++) {
      if ($(answer[j]).css("display", "block")) $(answer[j]).slideUp(0);
    }
    $(answer[i]).slideToggle(500);
  });
}
