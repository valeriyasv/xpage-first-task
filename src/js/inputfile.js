const inputFile = document.querySelector('.feadback__inputfile');
const contentInput = document.querySelector('.feadback__label');

inputFile.addEventListener('change', e => {
  contentInput.textContent = e.target.files[0].name
});