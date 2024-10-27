function wrapInArray<T>(value: T): T[] {
  return [value];
}

const result1 = wrapInArray<number>(123);
const result2 = wrapInArray<string>("daniel");
const result3 = wrapInArray<boolean>(false);

console.log(result1);
console.log(result2);
console.log(result3);
