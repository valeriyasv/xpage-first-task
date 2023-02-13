
  const selectSingle = document.querySelector('.select');
  const selectSingle_title = selectSingle.querySelector('.select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
  const selectContent = document.querySelector('.select__content');
  const body = document.body;


  // Toggle menu
  document.body.addEventListener('click', (e) => {
    if (e.target.className === 'select__title') {
      if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
      } else {
        selectSingle.setAttribute('data-state', 'active');
      }
    }
    if (e.target.className !== 'select__title') {
    selectSingle.setAttribute('data-state', '');
    }
    console.log(e.target.className)
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }

  // Reset title
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
  });


  // console.log(document)
  // body.addEventListener('click',  (e) => {
  //   console.log(e.target.className)
  //   if (e.target.className !== selectContent) {
  //     selectSingle.setAttribute('data-state', '');
  //   }
  // })