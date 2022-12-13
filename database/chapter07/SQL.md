# SQL 소개
- 데이터 검색과 정의 및 제어 기능을 포함한 비절차형 데이터 언어

#### 분류
1. 데이터 정의어 (DDL)
   1. 테이블 생성, 변경, 삭제 기능
2. 데이터 조작어 (DML)
   1. 테이블에 데이터 삽입, 수정, 삭제, 검색
3. 데이터 제어 (DCL)
   1. 보안, 권한 부여, 취소

## 데이터 정의어 (DDL)
#### 기능
1. 테이블 생성: CRATE TABLE
2. 테이블 변경: ALTER TABLE
3. 테이블 삭제: DROP TABLE

### 테이블 생성
- 테이블을 구성하는 컬럼들의 이름, 데이터 타입, 제약조건(키, 데이터 무결성..)들을 포함한다.
- 구조
   ```shell
   // []은 생략 가능
   CRATE TABLE {TABLE_NAME} (
     (컬럼_이름) (데이터_타입) [NOT NULL] [DEFAULT 기본_값]
     [PRIMARY KEY]
     [UNIQUE ]
     [FOREIGN KEY REFERENCES TABLE 이름] [ON DELETE] [ON UDPATE]
     [CONSTRAINT 이름] [CHECK(조건)]
   ;
   ```

#### 컬럼 정의
- 데이터 타입: INT, CHAR, VARCARH...
- null 값 허용. defaut는 허용
  - 기본키는 무조건 NOT NULL 
  - 기본키가 아니더라도 꼭 있어야 한다고 판단한다면 NOT NULL
- 기본값 필요 여부. DEFAUT 0...
  - 기본값을 지정하지 않으면 null이 저장됨.

#### 키 정의
- 기본키, 대체키, 외래키 지정

1. 기본키
   1. 필수는 아니지만 웬만하면 설정한다.
   2. 반드시 하나만 지정, 여러 컬럼으로 지정 가능하다.
2. 대체키 (UNIQUE(고객 이름))
   1. 테이블에서 중복이 안되고 유일성을 가져야 한다.
   2. null 값 가질 수 있고 여러 개 지정 가능
3. 외래키 (FOREIGN KEY())
   1. 출저를 분명이 밝혀야 한다. (REFERENCES 키워드)
   2. 출저를 밝히면서 참조 무결성 제약조건을 유지할 수 있다.
   3. CREATE TABLE 시 데이터 삭제, 업데이트의 선택을 설정할 수 있다.
   4. 만약 참조되어 있는 데이터를 삭제하려고 한다면, 다음 4가지 선택을 할 수 있다.
      1. ON DELETE NO ACTION (default): 삭제하지 못하게 한다.
      2. ON DELETE CASCADE: 관련 row를 같이 삭제한다.
      3. ON DELETE SET NULL: 관련 row의 외래키를 null로 변경한다.
      4. ON DELETE SET DEFAULT: 관련 row의 외래키 값을 미리 지정한 기본 값으로 변경한다.
   5. 참조되는 row가 update 될 때도 다음 4가지 선택을 할 수 있다.
      1. ON UPDATE NO ACTION (default): 변경하지 못하게 한다,
      2. ON UPDATE CASCADE: 관련 row에서 외래키 값을 같이 변경한다.
      3. ON UPDATE SET NULL: 관련 row의 외래키 값을 null로 변경한다.
      4. ON UPDATE SET DEFAULT: 미리 지정한 기본 값으로 변경한다.
   6. FOREIGN KEY(소속 부서) REFERENCES 부서(부서번호)
      ON DELETE CASCADE ON UPDATE CASCADE

#### 무결설 제약조건 정의
1. CHECK 키워드를 이용 
2. CHECK 키워드로 지정한 제약조건을 만족하는 row만 남게된다.
3. 데이터를 삽입, 수정할 때도 이 조건을 지켜야 한다.
4. CHECK(재고량 >= 0 AND 재고량 <= 1000)
5. CONSTRAINT 키워드로 별칭 부여 가능하다. 
   1. CONSTRAINT CHECK_COPY CHECK(제조업체 = '한빛제과')

### 테이블의 변경
1. ALTER TABLE 이용해 컬럼 추가, 삭제, 제약조건 추가, 삭제가 가능

#### 새 컬럼 추가
```shell
ALTER TABLE 테이블 이름
  ADD 컬럼_이름 데이터_타입 [NOT NULL] [DEFAULT VALUE]
```

#### 기존 컬럼 삭제
1. 만약 삭제할 컬럼에 제약조건이 존재, 참조하는 다른 속성이 존재하는 경우 삭제가 불가능하다.
2. 이 경우 관련 제약조건이나 참조하는 컬럼을 먼저 제거해야 한다.
```shell
ALTER TABLE 테이블_이름 DROP COLUMN 컬럼_이름
```

#### 새로운 제약조건 추가, 삭제
```shell
ALTER TALBE 테이블_이름 ADD CONSTRAINT 제약조건_이름 제약조건;
ALTER TALBE 테이블_이름 DROP CONSTRAINT 제약조건_이름;
```

### 테이블 삭제
1. DROP TABLE 테이블 이름
2. 삭제할 테이블을 참조하는 테이블이 있다면 삭제가 수행되지 않는다.
3. 테이블을 참조하는 외래키 제약조건을 먼저 제거한다.

## 데이터 조작어 (DML)

#### 분류
1. 데이터 검색: SELECT
2. 데이터 삽입: INSERT
3. 데이터 수정: UPDATE
4. 데이터 삭제: DELTET

### 데이터 검색 (SELECT)
1. ,를 이용해 속성, 테이블을 이어서 검색할 수 있다.
   ```shell
   SELECT [ ALL | DISTINCT ] 속성_리스트1, 속성_리스트2
   FROM 테이블 리스트1
   ```
2. 중복을 허용하기 위해 ALL 키워드를 명시적으로 사용한다.
   ```shell
   SELECT ALL 제조업체
   FROM 제품;
   ```
3. 중복 제거를 위해 DISTINCT 키워드를 사용한다.
   ```shell
   SELECT ALL 제조업체
   FROM 제품;
   ```
4. 출력되는 속성의 이름을 AS 키워드를 이용해 다른 이름으로 바꿀 수 있다.
   1. 실제로 바꿔지는 것은 아님
   2. AS 키워드는 생략이 가능하다.
   3. 단가를 가격으로 바꿔서 출력
   ```shell
   SELECT 제품명, 단가 AS 가격
   FROM 제품;
   ```
5. 산술식을 이용한 검색 ( 조건 아님. +,-,*,% )
   1. 기존 단가에 +500 하여 출력
   2. 실제로 더해지진 않는다.
   ```shell
   SELECT 제품명, 단가 + 500, AS "조정 단가"
   FROM 제품;
   ```
6. 조건 검색 (논리 연산자, WHERE) [조건 검색 LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59037)
   1. AND, OR, NOT, =, >, <...
   ```shell
   SELECT 제품명, 단가 AS 가격
   FROM 제품
   [WHERE 컬럼1 = '한빛제과' AND 컬럼2 > 수량];
   ```
7. LIKE를 이용한 검색 [LIKE LV1](https://school.programmers.co.kr/learn/courses/30/lessons/131112)
   1. 검색 조건을 부분적으로만 알고 있을 때
   2. 오직 문자열을 이용한 조건에서만 사용 가능
   3. 조건 예시
      1. '김%': '김'으로 시작하는 문자열
      2. '%김': '김'으로 끝나는 문자열
      3. '%김%': '김'이 포함된 문자열[LIKE LV2](https://school.programmers.co.kr/learn/courses/30/lessons/59047)
      4. '김__': '김XX'인 문자열
      5. '__김%': 세 번째 글자가 '김'인 문자열
      ```shell
      SELECT 제품명, 단가 AS 가격
      FROM 제품
      [WHERE 고객이름 LIKE '김%';
      ```   
8. NULL을 이용한 검색 [NOT NULL LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59407)
   1. 특정 컬럼이 널 값인지를 비교하려 할 때
   2. **컬럼의 값이 NULL일 때 어떤 컬럼과 비교를 하면 무조건 false가 반환된다.**
   ```shell
   SELECT 고객 이름
   FROM 고객
   [WHERE 나이 IS NULL';
   [WHERE 나이 IS NOT NULL';
   ```   
9. 정렬 검색 [정렬 LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59036)
   1. ORDER BY 키워드
   2. ORDER BY 속성 [ASC | DESC]
   3. ORDER BY 속성1 ASC, 속성2 ASC, 속성3 DESC..  [여러 기준 정렬 LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59404)
   ```shell
   SELECT 주문 고객, 주문 제품
   FROM 주문
   WHERE 수량 >= 10f
   ORDER BY 주문 제품 ASC, 수량 DESC
   ```   
10. 집계 함수 이용한 검색 
    1. 통계 낼 때 사용
    2. 집계함수는 컬럼 함수라고도 불림
    3. COUNT, MAX, MIN, (SUM, AVG -> 숫자만 가능) [max, min LV1](https://school.programmers.co.kr/learn/courses/30/lessons/131697)
    4. null은 집계하지 않는다.
    5. WHERE에서는 사용불가, SELECT나 HAVING 절에서만 사용 가능
    6. COUNT시 null은 집계하지 않는다. *로 COUNT 했을 땐 row의 개수를 세는 것 [count LV1](https://school.programmers.co.kr/learn/courses/30/lessons/131528)
    7. DISTINCT를 이용해 중복 제거한 row의 개수를 셀 수 있다. [distinct LV2](https://school.programmers.co.kr/learn/courses/30/lessons/59408)
   ```shell
   SELECT COUNT((DISTINCT(제조 업체)) AS '재고업체 수'
   FROM 제품
   ```    
11. 그룹 검색 [group, having lv2](https://school.programmers.co.kr/learn/courses/30/lessons/59041)
    1. GROUP BY
    2. 그룹에 대한 조건을 추가하려면 HAVING
    3. SELCET 절에 그룹화 하려는 컬럼을 적고 결과물을 출력하는 컬럼도 적어주는 것이 좋다.
    4. HAVING 절을 이용해 집계 함수를 이용할 수 있다.
    5. 1차, 2차로 그룹화하려 할 때 GROUP BY를 이어서 작성한다.
   ```shell
   // 등급으로 그룹화, 적립금이 1000원 이상인 그룹만 SELECT 한다.
   SELECT 등급(그룹화 하려는 컬럼), COUNT(*) AS 고객수, AVG(적립금) AS 평균적립금 
   FROM 고객
   GROUP BY 등급 HAVING AVG(적립금) >= 1000
   ```    

- [IFNULL LV1](https://school.programmers.co.kr/learn/courses/30/lessons/131114), [IFNULL LV1](https://school.programmers.co.kr/learn/courses/30/lessons/132201), [IFNULL LV2](https://school.programmers.co.kr/learn/courses/30/lessons/59410)
- [LIMIT LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59405)
- [컬럼 자르기 LV1](https://school.programmers.co.kr/learn/courses/30/lessons/132203)
- [date time max LV1](https://school.programmers.co.kr/learn/courses/30/lessons/59415), [date time min LV2](https://school.programmers.co.kr/learn/courses/30/lessons/59038)
- [부속 질의문 LV2](https://school.programmers.co.kr/learn/courses/30/lessons/133025)