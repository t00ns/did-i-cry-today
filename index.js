let saveEl = document.getElementById('save-log');
let countEl = document.getElementById('count-el');
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + ' - ';
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  // add count variable b/c Javascript needs explicit instructions
  count = 0;
}
