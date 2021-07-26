const buttonNodes = document.querySelectorAll('button');
const buttons = [...buttonNodes];

class Button {
	constructor (container, method, args) {
		this.container = container;
		this.method = method;
		this.args = args;
	}

	callMethod() {
		if (Array.isArray(this.args)) {
			this.method(...this.args);
		}
	}
}

export default function getButtons(calculator) {
	return buttons.map(button => {
		if (button.id === 'number') {
			return new Button(
				button,
				calculator.addToCalculation,
				[button.textContent]
			)
		}
		if (button.id === 'operator') {
			return new Button(
				button,
				calculator.setOperator,
				[button.textContent]
			)
		}
		if (button.id === 'equal') {
			return new Button(
				button,
				calculator.evaluate,
				[]
			)
		}
		if (button.id === 'clear') {
			return new Button(
				button,
				calculator.clearAll,
				[]
			)
		}
	});
}
