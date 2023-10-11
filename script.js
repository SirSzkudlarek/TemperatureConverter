const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let convValue;
const convert = () => {
  if(converter.value !== '') {
    if(one.textContent == '°C') {
      convValue = (converter.value * 1.8) + 32;
      result.textContent = `${converter.value}°C to ${convValue.toFixed(1)}°F`
    } else {
      convValue = (converter.value - 32) / 1.8;
      result.textContent = `${converter.value}°F to ${convValue.toFixed(1)}°C`
    }
  } else {
    result.textContent = 'Musisz podać temperaturę';
  }
}

const reset = () => {
  converter.value = '';
  result.textContent = '';
}

const change = () => { 
  if(converter.value !== '') {
    if(one.textContent == '°C') {
      one.textContent = '°F';
      two.textContent = '°C';
      converter.value = convValue.toFixed(1);
      convert();
    } else {
      one.textContent = '°C';
      two.textContent = '°F';
      converter.value = convValue.toFixed(1);
      convert();
    }
  } else {
    if(one.textContent == '°C') {
      one.textContent = '°F';
      two.textContent = '°C';
    } else {
      one.textContent = '°C';
      two.textContent = '°F';
    }
  }
}

convBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', change);