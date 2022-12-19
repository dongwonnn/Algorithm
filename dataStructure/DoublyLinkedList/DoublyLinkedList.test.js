describe('단일 연결 리스트 테스트', () => {
  const { Node, DoublyLinkedList } = require('./DoublyLinkedList.js');

  const fn = 'first node';

  const sn = 'second node';
  const tn = 'third node';

  const pn = 'prev node';
  const nn = 'next node';

  const firstNode = new Node(fn);
  const secondNode = new Node(sn);
  const thirdNode = new Node(tn);

  const prevNode = new Node(pn);
  const nextNode = new Node(nn);

  const initList = {
    head: null,
    tail: null,
    length: 0,
  };

  describe('node 생성 테스트', () => {
    const firstNode = new Node(fn);
    const prevNode = new Node('prev node');
    const nextNode = new Node('next node');

    it('value, prev, next 생성 테스트', () => {
      expect(firstNode).toEqual({
        value: fn,
        prev: null,
        next: null,
      });
    });

    it('prev, next 연결 테스트', () => {
      firstNode.prev = prevNode;
      firstNode.next = nextNode;
      expect(firstNode).toEqual({
        value: 'first node',
        prev: prevNode,
        next: nextNode,
      });
    });

    it('이전, 이후 node들의 next, prev 노드 테스트', () => {
      nextNode.prev = firstNode;
      prevNode.next = firstNode;
      expect(nextNode).toEqual({
        value: 'next node',
        prev: firstNode,
        next: null,
      });

      expect(prevNode).toEqual({
        value: 'prev node',
        prev: null,
        next: firstNode,
      });
    });
  });

  describe('push 테스트', () => {
    const list = new DoublyLinkedList();
    list.push(fn);

    it('비어있는 list에 push', () => {
      expect(list).toEqual({
        head: firstNode,
        tail: firstNode,
        length: 1,
      });
    });

    it('비어있지 않은 list에 push', () => {
      list.push(nn);

      expect(list.head.value).toBe(fn);
      expect(list.head.next.value).toBe(nn);
      expect(list.head.prev).toBe(null);

      expect(list.tail.value).toBe(nn);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev.value).toBe(fn);

      expect(list.length).toBe(2);
    });
  });

  describe('pop 테스트', () => {
    const list = new DoublyLinkedList();

    it('비어있는 list에 pop', () => {
      const result = list.pop();
      expect(result).toBe(undefined);
    });

    it('1개 이상 node가 있는 list에 pop', () => {
      list.push(fn);
      list.push(sn);
      list.push(tn);

      const res = list.pop();
      expect(list.tail.value).toBe(sn);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev.value).toBe(fn);
      expect(list.length).toBe(2);
      expect(res).toEqual(thirdNode);
    });

    it('1개 node가 있는 list에 pop', () => {
      list.pop();
      const res = list.pop();

      expect(list).toEqual(initList);
      expect(res).toEqual(firstNode);
    });
  });

  describe('shift 테스트', () => {
    const list = new DoublyLinkedList();

    it('비어있는 list에 shift', () => {
      const res = list.pop();
      expect(res).toBe(undefined);
    });

    it('1개 이상 노드가 있는 list에 shift', () => {
      list.push(fn);
      list.push(sn);
      list.push(tn);

      const res = list.shift();
      expect(res).toBe(firstNode);
      expect(list.head.value).toBe(sn);
      expect(list.head.prev).toBe(null);
      expect(list.head.next.value).toBe(tn);
      expect(list.length).toBe(2);
    });

    it('1개 노드가 있는 list에 shift', () => {
      list.shift();
      const res = list.shift();
      expect(res).toBe(secondNode);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  });

  describe('unShift 테스트', () => {
    const list = new DoublyLinkedList();

    it('비어있는 list에 unShift', () => {
      list.unShift(fn);
      expect(list).toEqual({
        head: firstNode,
        tail: firstNode,
        length: 1,
      });
    });

    it('비어있지 않은 list에 unShift', () => {
      list.unShift(pn);

      expect(list.head.value).toBe(pn);
      expect(list.tail.prev.value).toBe(pn);
      expect(list.head.next.value).toBe(fn);
      expect(list.tail.value).toBe(fn);
      expect(list.length).toBe(2);
    });
  });

  describe('get 테스트', () => {});
  describe('set 테스트', () => {});
  describe('insert 테스트', () => {});
  describe('remove 테스트', () => {});
  describe('reverse 테스트', () => {});
});
