class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    // 첫 Node 인지 check 해야한다.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 이전 Node의 next에 다음 newNode를 저장
      this.tail.next = newNode;
      // 현재 tail newNode를 갱신
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // 마지막 Node를 반환, 동시에 List에서 마지막 Node를 제거해야 한다.
  pop() {
    if (!this.head) return undefined;
    else {
      let lastNode = this.head;
      let newTail = lastNode;

      // lastNode를 찾고, 직전의 Node를 newTail에 저장한다.
      while (lastNode.next) {
        newTail = lastNode;
        lastNode = lastNode.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return lastNode;
    }
  }

  shift() {
    if (!this.head) return undefined;
    else {
      const currentHead = this.head;
      const nextNode = this.head.next;
      this.head = nextNode;
      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return currentHead;
    }
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(index, value) {
    let findNode = this.get(index);
    if (findNode) {
      findNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log('[arr]', arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new SingleLinkedList();
list.push('1');
list.push('2');
list.push('3');

module.exports = {
  Node,
  SingleLinkedList,
};
