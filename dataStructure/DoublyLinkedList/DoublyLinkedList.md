# 이중 연결 리스트

- 단일 연결 리스트에 prev가 추가된 것. 편하다
- 단일 연결 리스트보다 메모리가 더 많이 필요하다.

## node

- value, prev, next 값을 가진다.
- next node 역시 value, prev, next를 가지고 있고 prev에는 첫 번째 node가 저장되어야 한다.
- prev node 역시 value, prev, next를 가지고 있고 next에는 첫 번째 node가 저장되어야 한다.

## push

1. 새로운 node 생성
2. 비어 있는지 체크 -> head가 null 인지, 혹은 길이가 0 인지 체크
3. tail의 next에 새로운 node를 저장
4. 새로 만든 node의 prev에 이전 tail 저장
5. tail을 새로운 node로 저장

## pop
1. list가 비어있다면 undefined 
2. lastNode 저장
3. pop 하고 길이가 0이면 null로 초기화
4. 이전 node가 tail이 된다. next는 null
5. length --
