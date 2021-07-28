const displayContentElement = document.querySelector('.content');

export default class Display {
 	addToTheScreen (number) {
 		const floatNumber = parseFloat(number);
 		if (isNaN(floatNumber)) {
 			displayContentElement.textContent += number;
 			return;
 		}

 		displayContentElement.textContent = floatNumber.toLocaleString('en');
 	}

 	displayResult (result) {
 		displayContentElement.textContent = parseFloat(result).toLocaleString('en');
 	}

 	clearScreen () {
 		displayContentElement.textContent = '';
 	}
}