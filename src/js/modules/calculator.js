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
			display.addToTheScreen(value);	 		
	 		return;
	 	} 
	 	this.setSecondNumber(value);
	 	display.addToTheScreen(value);
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

		const firstNrToInt = parseInt(this.firstNumber);
		const secondNrToInt = parseInt(this.secondNumber);

		switch (this.operator) {
			case '+':
				total = firstNrToInt + secondNrToInt;
				break;
			case '-':
				total = firstNrToInt - secondNrToInt;
				break
			case '/':
				total = firstNrToInt / secondNrToInt;
				if (total === Infinity) total = ''
				break;
			case '*':
				total = firstNrToInt * secondNrToInt;
				break;
		}
		
		display.displayResult(total)
		this.afterEvaluationReset(total);
	}
}

export default Calculator;