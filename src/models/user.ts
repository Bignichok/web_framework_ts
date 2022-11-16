interface UserData {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserData) {}

  get(propName: string): string | number {
    if (propName in this.data) {
      return this.data[propName];
    } else {
      return "Sorry, user does not have this property";
    }
  }

  set(updateObject: UserData): void {
    this.data = {
      ...this.data,
      ...updateObject,
    };
  }

  on(eventName: string, cb: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((cb) => cb());
  }
}
