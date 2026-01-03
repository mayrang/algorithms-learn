class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }

  printAll() {
    let cur = this.head;
    while (cur !== null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  getNode(index) {
    let curIndex = 0;
    let cur = this.head;
    while (curIndex !== index) {
      cur = cur.next;
      curIndex += 1;
    }
    return cur;
  }

  addNode(index, value) {
    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prevNode = this.getNode(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
  }

  deleteNode(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let indexNode = this.getNode(index);
    let prevNode = this.getNode(index - 1);
    prevNode.next = indexNode.next;
  }
}

const linkedList = new LinkedList(3);

linkedList.append(5);
linkedList.append(12);

// linkedList.printAll();
// console.log(linkedList.getNode(2).data);

linkedList.addNode(0, 20);
linkedList.deleteNode(3);

linkedList.printAll();
