import Calculator from './modules/calculator.js';
import getButtons from './modules/button.js';

const calculator = new Calculator();
const buttons = getButtons(calculator);
console.log(buttons);

buttons.forEach(button => {
	button.container.addEventListener('click', () => {
		button.callMethod();
	});
});
