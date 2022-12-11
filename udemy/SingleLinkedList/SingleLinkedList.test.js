describe('단일 연결 리스트 테스트', () => {
  const { Node, SingleLinkedList } = require('./SingleLinkedList.js');

  const fn = 'first node';
  const sn = 'second node';
  const tn = 'third node';

  const firstNode = new Node(fn);
  const secondNode = new Node(sn);

  const initList = {
    head: null,
    tail: null,
    length: 0,
  };

  describe('Node 테스트', () => {
    const newNode = new Node('first node');
    it('first node 생성', () => {
      expect(newNode).toEqual(firstNode);
    });

    it('second node 생성', () => {
      newNode.next = secondNode;
      expect(newNode).toEqual({
        value: fn,
        next: secondNode,
      });
    });
  });

  describe('push 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);
    const firstListNode = list.head;

    it('비어있는 list에 push', () => {
      expect(list).toEqual({
        head: firstListNode,
        tail: firstListNode,
        length: 1,
      });
    });

    it('비어있지 않은 list에 push', () => {
      list.push(sn);

      expect(list).toEqual({
        head: firstListNode,
        tail: secondNode,
        length: 2,
      });
    });
  });

  describe('pop 테스트', () => {
    const list = new SingleLinkedList();

    it('비어있는 list에 pop', () => {
      const returnData = list.pop();
      expect(returnData).toBe(undefined);
    });

    it('list node 개수가 1개일 때 pop', () => {
      list.push(fn);
      const popData = list.pop();
      expect(popData).toEqual(firstNode);
      expect(list).toEqual(initList);
    });

    it('list node 개수가 1개 이상일 때 pop', () => {
      list.push(fn);
      list.push(sn);

      const returnData = list.pop();
      expect(returnData).toEqual(secondNode);
      expect(list).toEqual({ head: firstNode, tail: firstNode, length: 1 });
    });
  });

  describe('shift 테스트', () => {
    const list = new SingleLinkedList();

    it('비어있는 list에 shift', () => {
      const returnData = list.shift();
      expect(returnData).toBe(undefined);
    });

    it('list의 길이가 1일 때 shift', () => {
      list.push(fn);
      const returnData = list.shift();

      expect(returnData).toEqual(firstNode);
      expect(list).toEqual(initList);
    });

    it('list의 길이가 1보다 클 때 shift', () => {
      list.push(fn);
      list.push(sn);

      const firstNode = list.head;
      const returnData = list.shift();

      expect(returnData).toEqual(firstNode);
      expect(list).toEqual({ head: secondNode, tail: secondNode, length: 1 });
    });
  });

  describe('unShift 테스트', () => {
    it('list가 비어있을 때 unShift', () => {
      const list = new SingleLinkedList();

      list.unShift(fn);

      expect(list).toEqual({
        head: firstNode,
        tail: firstNode,
        length: 1,
      });
    });

    it('list가 비어있지 않을 때 unShift', () => {
      const list = new SingleLinkedList();
      list.unShift(sn);
      list.unShift(fn);

      const headNode = list.head;

      expect(list).toEqual({
        head: headNode,
        tail: secondNode,
        length: 2,
      });
    });
  });

  describe('get 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);

    it('get index가 음수일 때', () => {
      expect(list.get(-1)).toBe(null);
    });

    it('get index가 length보다 길 때 ', () => {
      expect(list.get(2)).toBe(null);
    });

    it('찾는 index가 있을 때', () => {
      expect(list.get(0)).toEqual(firstNode);
    });
  });

  describe('set 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);
    list.push(sn);

    it('set index가 음수일 때', () => {
      expect(list.set(-1)).toBe(false);
    });

    it('set index가 length 보다 길 때 ', () => {
      expect(list.set(2)).toBe(false);
    });

    it('찾는 index가 있을 때 값 update', () => {
      const prevNode = list.get(0);
      const findNode = list.get(1);
      const returnData = list.set(1, 'new Node');

      expect(returnData).toBe(true);
      expect(findNode.value).toBe('new Node');
      expect(list).toEqual({
        head: prevNode,
        tail: findNode,
        length: 2,
      });
    });
  });

  describe('insert 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);
    list.push(sn);

    it('index가 0보다 작거나 length 보다 클 때', () => {
      expect(list.insert(-1, '')).toBe(false);
      expect(list.insert(3, '')).toBe(false);
    });

    it('index가 0보다 크거나 같거나, length 보다 작거나 같을 때', () => {
      const returnData = list.insert(1, 'new Node');
      const prevNode = list.get(0);
      const currentNode = list.get(1);

      expect(returnData).toBe(true);
      expect(currentNode.value).toBe('new Node');
      expect(list).toEqual({
        head: prevNode,
        tail: currentNode.next,
        length: 3,
      });
    });
  });

  describe('remove 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);
    list.push(sn);
    list.push(tn);

    it('index가 0보다 작거나 length 보다 클 때', () => {
      expect(list.remove(-1)).toBe(undefined);
      expect(list.remove(3)).toBe(undefined);
    });

    it('index가 0보다 크거나 같거나, length 보다 작거나 같을 때', () => {
      const prevNode = list.get(0);
      const removeNode = list.get(1);
      const nextNode = list.get(2);
      const returnData = list.remove(1);

      expect(returnData).toEqual(removeNode);
      expect(list).toEqual({
        head: prevNode,
        tail: nextNode,
        length: 2,
      });
    });
  });

  describe('reverse 테스트', () => {
    const list = new SingleLinkedList();
    list.push(fn);
    list.push(sn);
    list.push(tn);

    it('reverse 테스트', () => {
      const firstListNode = list.get(0);
      const thirdListNode = list.get(2);
      const reversedList = list.reverse();

      expect(reversedList).toEqual({
        head: thirdListNode,
        tail: firstListNode,
        length: 3,
      });
    });
  });
});
