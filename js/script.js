const buttons   = Array.from(document.querySelectorAll('button')),
      clear     = buttons[0],
      backspace = buttons[1],
      divide    = buttons[2],
      multiply  = buttons[6],
      some      = buttons[10],
      subtract  = buttons[14],
      equals    = buttons[17];

const resultDisplay = document.querySelector('#result');

let currentValue = '',
    operator;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target) {
            case clear:
                currentValue = '';
                operator = undefined;
                break;
            case backspace:
                if(currentValue[currentValue.length - 1] == operator) {
                    operator = undefined;
                }
                currentValue = currentValue.slice(0, -1);
                break;

            case some:
            case subtract:
            case multiply:
            case divide:
                if(!operator) {
                    operator = e.target.textContent;
                    currentValue += e.target.textContent;
                }
                break;

            case equals: 
                if(operator) {
                    currentValue = operation(currentValue, operator);
                    operator = undefined;
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

function operation (string, operator) {
    const index = string.indexOf(operator);
    const val1 = parseInt(string.substring(0, index));
    const val2 = parseInt(string.substring(index + 1, string.length));

    let result;

    switch (operator) {
        case some.textContent:
            result = val1 + val2;
            break;
        case subtract.textContent:
            result = val1 - val2;
            break;
        case multiply.textContent:
            result = val1 * val2;
            break;
        case divide.textContent:
            result = val1 / val2;
            break;
    }

    return result;
}