class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "데이터가 없어용";
    }
    let dequeueHead = this.head;
    this.head = this.head.next;

    return dequeueHead;
  }

  peek() {
    if (this.isEmpty()) {
      return "데이터가 없어용";
    }
    return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }
}
