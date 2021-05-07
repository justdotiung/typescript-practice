// 제네릭을 이용한 안전한 조건부 처리.
interface IPerson {
  name: string;
  age: number;
}

const gPerson: IPerson = {
  name: "Mark",
  age: 39,
};

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(gPerson, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(gPerson, "name", "Kim");
