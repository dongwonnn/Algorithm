#### push
1. push(value)
2. newNode 생성
3. head가 없다면 head, tail에 new Node
4. head가 있다면 tail.next에 newNode, tila을 newNode에

#### pop
1. pop()
2. head가 없다면 undefined 반환
3. head부터 tail까지 순회해 tail node 찾는다.
4. tail을 length-1 node로 교체, tail.next를 null
5. node가 1개였다면 head, tail을 null로 저장
6. 마지막 노드 return

#### shift
1. Node가 없다면 return undefined
2. Node가 존재한다면 현재 head를 저장
3. 현재 head의 next Node를 head로 업데이트
4. 길이 1 감소
5. 제거된 Node return

#### unShift
1. 새로운 Node 생성
2. head가 없다면 새로운 Node에 head, tail 지정
3. Node가 이미 있다면 새롭게 생성된 Node의 next를 현재의 head로 업데이트
4. head를 새로운 Node로 업데이트
5. 길이 1 추가
6. this return

#### get : read
1. get(index). index-1 번 째 Node를 return한다.
2. 예외 처리. 0보다 작거나, list의 길이보다 크면 안된다.
3. index 만큼 반복해서 찾는다.

#### set : update
1. set(index, 'update value')
2. index가 없을 땐 false return ( find를 이용한다. )
3. 해당 Node를 찾았다면 value로 업데이트 후 true return

#### insert
1. insert(index, 'insert value')
2. index가 0보다 작고 length 보다 크면 return false
3. index가 0이면 unShift, length와 같으면 push
4. get의 index-1을 이용해 이전 Node를 찾고 새 Node를 연결, next에 다음 Node를 연결한다.
5. 길이 1 추가

#### remove
1. remove(index)
2. index가 0보다 작고, length 보다 크면 false
3. 0이거나 length면 shift, pop
4. get(index-1)로 찾고 양 옆 연결
5. length++, 삭제된 Node return

#### reverse
1. head와 tail swap
2. next, prev 변수 생성
3. current Node의 next에 next.next 저장, 순회