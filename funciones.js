const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const answer = question.querySelector('.answer');

  question.addEventListener('click', () => {
    question.classList.toggle('active');
  });
});
