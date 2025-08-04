interface SumHandler {
  (param1: number, param2: number): number;
}

export const sumOfNumber: SumHandler = (a: number, b: number) => {
  return a + b;
};
