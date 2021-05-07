// 제네릭의 추론은 가장 작은 범위로 추론한다

function helloArray<T>(params: T[]): T {
  return params[0];
}

helloArray(["Mark", 5]);

function helloTuple<T, K>(params: [T, K]): T {
  return params[0];
}

helloTuple(["Mark", 5]);
