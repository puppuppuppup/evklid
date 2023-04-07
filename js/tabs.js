const stepBtn = document.querySelectorAll('.process-steps__btn');
const step = document.querySelectorAll('.process-step');
const processBG = document.querySelector('.process-steps');
let path = "step-one";

stepBtn[0].classList.add('process-steps__btn--active');
step[0].classList.add('process-step--active');

stepBtn.forEach(element => {
  element.addEventListener('click', (e) => {
    path = e.currentTarget.getAttribute('data-goto');

    stepBtn.forEach(btn => {
      btn.classList.remove('process-steps__btn--active');
    })
    e.currentTarget.classList.add('process-steps__btn--active');

    step.forEach(step => {
      step.classList.remove('process-step--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('process-step--active');
  })
});
