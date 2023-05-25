window.addEventListener('DOMContentLoaded', () => {
    let display = document.querySelector('input[name="display"]');
    let equalBtn = document.querySelector('.equal');
  
    display.addEventListener('input', function() {
      display.value = display.value.replace(/[^0-9*/\-.+]/g, '');
    });
  
    equalBtn.addEventListener('click', calculate);
    display.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
      }
    });
  
    function calculate() {
      display.value = eval(display.value);
    }
  });
  