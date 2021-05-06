interface Person5 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p51: Person5 = {
  name: "Mark",
  gender: "male",
};

// interface는 merge 가 된다.
