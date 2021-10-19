export function sum(a: number, b: number): number {
  return a + b;
}

export async function fetchData(isFail?: boolean): Promise<string> {
  if (isFail) {
    return Promise.reject('error');
  }

  return Promise.resolve('data');
}