type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction: HelloFunctionGeneric1 = (message) => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = (message) => message;
