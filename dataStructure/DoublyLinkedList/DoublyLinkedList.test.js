describe('단일 연결 리스트 테스트', () => {
  const { Node, DoublyLinkedList } = require('./DoublyLinkedList.js');

  describe('node 생성 테스트', () => {
    const firstNode = new Node('first node');
    const prevNode = new Node('prev node');
    const nextNode = new Node('next node');

    it('value, prev, next 생성 테스트', () => {
      expect(firstNode).toEqual({
        value: 'first node',
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
    let firstNode = new Node('first node');
    let nextNode = new Node('next node');

    const list = new DoublyLinkedList();
    list.push(firstNode);
    it('비어있는 list에 push', () => {
      expect(list).toEqual({
        value: 'first node',
        tail: firstNode,
        length: 1,
      });
    });

    it('list에 push 테스트', () => {
      list.push(nextNode);

      expect(list).toEqual({
        head: firstNode,
        tail: nextNode,
        length: 2,
      });

      expect(firstNode).toEqual({
        value: 'first node',
        prev: null,
        next: nextNode,
      });

      expect(nextNode).toEqual({
        value: 'next node',
        prev: firstNode,
        next: null,
      });
    });
  });

  describe('pop 테스트', () => {});
  describe('shift 테스트', () => {});
  describe('unShift 테스트', () => {});
  describe('get 테스트', () => {});
  describe('set 테스트', () => {});
  describe('insert 테스트', () => {});
  describe('remove 테스트', () => {});
  describe('reverse 테스트', () => {});
});
