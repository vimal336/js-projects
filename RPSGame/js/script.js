const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');

function reload() {
  const currentYear = new Date().getFullYear();
  const newYear = new Date(`january 1 ${currentYear + 1} 00:00:00`);
  const currentDate = new Date();
  const diff = newYear - currentDate;




