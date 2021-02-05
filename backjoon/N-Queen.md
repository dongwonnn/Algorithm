```
#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <cstring>
using namespace std;

int n;
int ans;
int check[16][16];
int dy[3] = {-1,-1,-1};
int dx[3] = {-1,0,1};

//void input() {}

int check_Q(int y,int x) {

	// 밑으로 내려가면서 채우기 때문에 위쪽만 체크
	// 왼위 대각, 위, 오른위 대각
	for (int i = 0; i < 3; i++) {
		int ny = y;
		int nx = x;
		while (true) {
			ny = ny + dy[i];
			nx = nx + dx[i];

			//경로에 퀸 X
			if (nx < 0 || nx >= n || ny < 0 || ny >= n) break;

			if (check[ny][nx] == 1) return 0;
		}
	}

	return 1;
}

void go(int y) {
	//y가 배열 마지막에 닿을 때
	if (y == n) {
		ans++;
		return;
	}
	for (int x = 0; x < n; x++) {
		if (check_Q(y, x) && check[y][x] == 0) {
			check[y][x] = 1;
			go(y + 1);
			check[y][x] = 0;
		}
	}
}

int main() {
	//freopen("input.txt", "r", stdin);

	scanf("%d",&n);

	go(0);

	printf("%d", ans);
	return 0;
}
```
