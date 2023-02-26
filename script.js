const result = document.querySelector('.number');
const generate = document.querySelector('.generate');

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

generate.addEventListener('click', e => {
  if (e.target.closest('.generate')) {
    e.preventDefault();
    result.innerHTML = randomNumber();
  }
});
