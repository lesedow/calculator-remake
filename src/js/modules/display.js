const displayContentElement = document.querySelector('.content');

export default class Display {
 	addToTheScreen (element) {
 		displayContentElement.textContent += element;
 	}

 	displayResult (result) {
 		displayContentElement.textContent = result;
 	}

 	clearScreen () {
 		displayContentElement.textContent = '';
 	}
}