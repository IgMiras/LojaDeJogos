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

  ordenar() {
    this._strategy.ordenar();
  }
}

class QuickSort {
  ordenar(array) {
    if (typeof array === 'undefined') { return console.log('Array undefined'); }
    if (array.length <= 1) {
      return array
  }

  let pivot = array[0]

  let left = []
  let right = []

  for (let i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }

  return ordenar(left).concat(pivot, ordenar(right))
  }
}

class BubbleSort {
  ordenar(arr) {
    if (typeof array === 'undefined') { return console.log('Array undefined'); }
    for (var i = 0; i < arr.length; i++) {
 
      // Last i elements are already in place  
      for (var j = 0; j < (arr.length - i - 1); j++) {

          // Checking if the item at present iteration 
          // is greater than the next iteration
          if (arr[j].avaliacao > arr[j + 1].avaliacao) {

              // If the condition is true
              // then swap them
              var temp = arr[j].avaliacao
              arr[j].avaliacao = arr[j + 1].avaliacao
              arr[j + 1] = temp
          }
      }
    }
  }
}

module.exports = { OrdenacaoStrategy, QuickSort, BubbleSort }