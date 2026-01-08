class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    // return newHead;
  }

  pop() {
    if (this.isEmpty()) {
      return "비어있다람쥐가개굴개굴!";
    }
    let deleteHead = this.head;
    this.head = this.head.next;
    return deleteHead;
  }

  peek() {
    if (this.isEmpty()) {
      return "비어있다람쥐가개굴개굴!";
    }
    return this.head.data;
  }

  isEmpty() {
    return this.head === null;
  }
}
