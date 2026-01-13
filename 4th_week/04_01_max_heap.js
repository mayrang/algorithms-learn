class MaxHeap {
  constructor() {
    this.items = [null];
  }

  insert(value) {
    this.items.push(value);
    let curIndex = this.items.length - 1;
    while (curIndex !== 1) {
      let parentIndex = parseInt(curIndex / 2);
      if (this.items[curIndex] > this.items[parentIndex]) {
        let temp = this.items[parentIndex];
        this.items[parentIndex] = this.items[curIndex];
        this.items[curIndex] = temp;
        curIndex = parentIndex;
      } else {
        break;
      }
    }
    return;
  }

  delete() {
    let temp = this.items[1];
        this.items[1] = this.items[this.items.length - 1];
        this.items[this.items.length - 1] = temp;
        
        let prevMax = this.items.pop(); // 8
        let curIndex = 1;

        while (curIndex <= this.items.length - 1) {
            let leftChildIndex = curIndex * 2;
            let rightChildIndex = curIndex * 2 + 1;
            let maxIndex = curIndex;

            if (leftChildIndex <= this.items.length - 1 && this.items[leftChildIndex] > this.items[maxIndex]) {
                maxIndex = leftChildIndex;
            }

            if (rightChildIndex <= this.items.length - 1 && this.items[rightChildIndex] > this.items[maxIndex]) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex === curIndex) {
                break;
            }

            // Swap elements
            temp = this.items[curIndex];
            this.items[curIndex] = this.items[maxIndex];
            this.items[maxIndex] = temp;
            curIndex = maxIndex;
        }

        return prevMax; // 8
    }
  }
}

let max_heap = new MaxHeap();
max_heap.insert(8);
max_heap.insert(6);
max_heap.insert(7);
max_heap.insert(2);
max_heap.insert(5);
max_heap.insert(4);
console.log(max_heap.items);
console.log(max_heap.delete());
console.log(max_heap.items);
