const btn = document.querySelector('.btn');
const social = document.querySelector('.social');

btn.addEventListener('click', function () {
  btn.classList.toggle('show');
  social.classList.toggle('show');
});
