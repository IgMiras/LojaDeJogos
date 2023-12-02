class OrdenacaoStrategy {
	constructor() {
		this._strategy = null;
	}

	set strategy(strategy) {
		this._strategy = strategy;
	}

	get strategy() {
		return this._strategy;
	}

	ordenar(arr) {
		this._strategy.ordenar(arr);
	}
}

class QuickSort {
	ordenar(arr) {
		if (arr.length < 2) {
			return arr;
		}
		const pivot = arr[Math.floor(Math.random() * arr.length)];

		let left = [];
		let right = [];
		let equal = [];

		for (let val of arr) {
			if (val.avaliacao < pivot.avaliacao) {
				left.push(val);
			} else if (val.avaliacao > pivot.avaliacao) {
				right.push(val);
			} else {
				equal.push(val);
			}
		}
		return [...this.ordenar(left), ...equal, ...this.ordenar(right)];
	}
}

class BubbleSort {
	ordenar(arr) {
		if (typeof arr === 'undefined') {
			return console.log('Array undefined');
		}
		for (var i = 0; i < arr.length; i++) {
			// Last i elements are already in place
			for (var j = 0; j < arr.length - i - 1; j++) {
				// Checking if the item at present iteration
				// is greater than the next iteration
				if (arr[j].avaliacao > arr[j + 1].avaliacao) {
					// If the condition is true
					// then swap them
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
	}
}

module.exports = { OrdenacaoStrategy, QuickSort, BubbleSort };
