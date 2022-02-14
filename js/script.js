const buttons   = Array.from(document.querySelectorAll('button')),
      clear     = buttons[0],
      backspace = buttons[1],
      divide    = buttons[2],
      multiply  = buttons[6],
      some      = buttons[10],
      subtract  = buttons[14],
      equals    = buttons[17];

//buttons.map(button => console.log(button));

const numbers       = Array.from(document.querySelectorAll('.number')),
      resultDisplay = document.querySelector('#result');

let currentValue = '',
    operator;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target) {
            case clear:
                currentValue = '';
                break;
            case backspace:
                if(currentValue[currentValue.length - 1] == operator) {
                    operator = undefined;
                }
                currentValue = currentValue.slice(0, -1);
                break;
            case some:
                if(!operator) {
                    operator = some.textContent;
                    currentValue += e.target.textContent;
                }
                break;
            case subtract:
                if(!operator) {
                    operator = subtract.textContent;
                    currentValue += e.target.textContent;
                }
                break;
            case multiply:
                if(!operator) {
                    operator = multiply.textContent;
                    currentValue += e.target.textContent;
                }
                break;
            case divide:
                if(!operator) {
                    operator = divide.textContent;
                    currentValue += e.target.textContent;
                }
                break;
            default:
                currentValue += e.target.textContent;
                break;
            }
        addToDisplay(currentValue);
    });
});

function addToDisplay (content) {
    resultDisplay.textContent = content ? content : '0';
}
