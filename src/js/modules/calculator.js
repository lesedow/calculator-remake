import Display from './display.js';

const display = new Display();

class Calculator {
	constructor() {
		this.firstNumber = '';
		this.secondNumber = '';
		this.operator = null;
	}

	setFirstNumber = (value) => {
		this.firstNumber += value;
	}

	setSecondNumber = (value) => {
		this.secondNumber += value;
	}

	setOperator = (operator) => {
		if (this.operator !== null || this.firstNumber.length < 1) return;
		this.operator = operator;
		display.addToTheScreen(operator);
	}

	addToCalculation = (value) => {
		if (this.operator === null) {
	 		this.setFirstNumber(value);
			display.addToTheScreen(this.firstNumber);	 		
	 		return;
	 	} 
	 	this.setSecondNumber(value);
	 	display.addToTheScreen(this.secondNumber);
	}	

	afterEvaluationReset = (total) => {
		this.operator = null;
		this.firstNumber = total.toString();
		this.secondNumber = '';
	}

	clearAll = () => {
		this.operator = null;
		this.firstNumber = '';
		this.secondNumber = '';
		display.clearScreen();
	}

	evaluate = () => {
		if (this.secondNumber.length < 1) return;
		let total;

		const firstNrToFloat = parseFloat(this.firstNumber);
		const secondNrToFloat = parseFloat(this.secondNumber);

		switch (this.operator) {
			case '+':
				total = firstNrToFloat + secondNrToFloat;
				break;
			case '-':
				total = firstNrToFloat - secondNrToFloat;
				break
			case '/':
				total = firstNrToFloat / secondNrToFloat;
				if (total === Infinity) total = ''
				break;
			case '*':
				total = firstNrToFloat * secondNrToFloat;
				break;
		}
		
		display.displayResult(total)
		this.afterEvaluationReset(total);
	}
}

export default Calculator;