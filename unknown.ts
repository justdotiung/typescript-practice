declare const maybe: unknown;

const aNumber: number = maybe;

//타입 가드
if (maybe === true) {
  const boolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const name: string = maybe;
}
