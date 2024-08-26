
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.accordion-question');

  questions.forEach((question) => {
    question.addEventListener('click', function () {
      const answer = document.getElementById(this.getAttribute('aria-controls'));
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

    
      this.setAttribute('aria-expanded', !isExpanded);
      answer.hidden = isExpanded;
      answer.style.display = isExpanded ? 'none' : 'block';

     
      const icon = this.querySelector('.icon');
      icon.textContent = isExpanded ? '+' : '-';
    });

    question.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  });
});
