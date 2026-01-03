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

  getSum() {
    let cur = this.head;
    let sum = "";
    while (cur !== null) {
      console.log(cur.data);
      sum += cur.data.toString();
      cur = cur.next;
    }
    return sum;
  }
}

function get_linked_list_sum(linked_list_1, linked_list_2) {
  let list1 = parseInt(linked_list_1.getSum());
  let list2 = parseInt(linked_list_2.getSum());

  return list1 + list2;
}

linked_list_1 = new LinkedList(6);
linked_list_1.append(7);
linked_list_1.append(8);

linked_list_2 = new LinkedList(3);
linked_list_2.append(5);
linked_list_2.append(4);

console.log(get_linked_list_sum(linked_list_1, linked_list_2));
