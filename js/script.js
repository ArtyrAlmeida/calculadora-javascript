const buttons   = Array.from(document.querySelectorAll('button')),
      clear     = buttons[0].textContent,
      backspace = buttons[1].textContent,
      divide    = buttons[2].textContent,
      multiply  = buttons[6].textContent,
      some      = buttons[10].textContent,
      subtract  = buttons[14].textContent,
      equals    = buttons[17].textContent;

const resultDisplay = document.querySelector('#result');

let currentValue = '',
    operator;

buttons.map(button => {
    button.addEventListener('click', (e) => targetButton(e.target.textContent));
});

document.addEventListener('keydown', (e) => targetButton(e.key));

function targetButton (event) {
    switch (event) {
        case clear:
            currentValue = '';
            operator = undefined;
            break;
        case 'Backspace':
        case backspace:
            if(currentValue[currentValue.length - 1] == operator) {
                operator = undefined;
            }
            currentValue = currentValue.slice(0, -1);
            break;
            
        case 'Enter':
        case equals: 
            if(operator) {
                currentValue = operation(currentValue, operator);
                operator = undefined;
            }
            break;

        case some:
        case subtract:
        case multiply:
        case divide:
            if(!operator) {
                operator = event;
                currentValue += event;
            }
            break;
    
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': 
        case '.':
            currentValue += event;
            break;
        }
    addToDisplay(currentValue);

}

function addToDisplay (content) {
    resultDisplay.textContent = content ? content : '0';
}

function operation (string, operator) {
    const index = string.indexOf(operator);
    const val1 = parseFloat(string.substring(0, index));
    const val2 = parseFloat(string.substring(index + 1, string.length));

    let result;

    switch (operator) {
        case some:
            result = val1 + val2;
            break;
        case subtract:
            result = val1 - val2;
            break;
        case multiply:
            result = val1 * val2;
            break;
        case divide:
            result = val1 / val2;
            break;
    }

    return result;
}