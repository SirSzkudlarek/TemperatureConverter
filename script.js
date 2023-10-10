const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let convValue;
console.log(converter.value)
const convert = () => {
  if(one.textContent == '°C' && converter.value !== '' && converter.value.match(numbers)) {
    convValue = Math.floor(((parseInt(converter.value) * 1.8) + 32) * 10) / 10;
    result.textContent = `${converter.value}°C to ${convValue}°F`
  } else if(one.textContent == '°F' && converter.value !== '' && converter.value.match(numbers)) {
    convValue = Math.floor(((parseInt(converter.value) - 32) / 1.8) * 10) / 10;
    result.textContent = `${converter.value}°F to ${convValue}°C`
  } else {
    result.textContent = 'Musisz podać temperaturę';
  }
}

const reset = () => {
  converter.value = '';
  result.textContent = '';
}

const change = () => { 
  if(one.textContent == '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
    converter.value = convValue;
    convert();
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    converter.value = convValue;
    convert();
  }
}

convBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', change);