export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set = (updateObject: T): void => {
    this.data = {
      ...this.data,
      ...updateObject,
    };
  };
}
