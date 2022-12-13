class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentNode = this.head;
      this.tail.next = newNode;
      newNode.prev = currentNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {}
  shift() {}
  unShift() {}
}

const firstNode = new Node('first node');
firstNode.next = new Node('second node');
console.log('test', firstNode);

module.exports = {
  Node,
  DoublyLinkedList,
};
