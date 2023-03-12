// bubble sort algorithm

export class Bubble {
  public constructor() {}
  public sort(array: number[]): number[] {
    let noSwaps: boolean;
    for (let i = array.length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // swapping
          let temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    return array;
  }
}
