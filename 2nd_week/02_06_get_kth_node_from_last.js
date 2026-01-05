class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  append(value) {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(value);
  }

  getKthNodeFromLast(k) {
    let kPointer = this.head;
    let pointer = this.head;
    for (let i = 1; i < k; i++) {
      if (pointer.next === null) {
        return this.head;
      }
      pointer = pointer.next;
    }

    while (pointer.next !== null) {
      kPointer = kPointer.next;
      pointer = pointer.next;
    }

    return kPointer;
  }
}

let linked_list = new LinkedList(6);
linked_list.append(7);
linked_list.append(8);

console.log(linked_list.getKthNodeFromLast(2).data);
