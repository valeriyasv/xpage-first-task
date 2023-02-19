const config = {
  dateFormat: "M-d",
  numInput : false,
  locale: 'russian',
  monthSelectorType: "static"
}

flatpickr.localize(flatpickr.l10ns.ru);
flatpickr('.calendar', config);
console.log(document.querySelector('.flatpickr-monthDropdown-months'), 'allll')

