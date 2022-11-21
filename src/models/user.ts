import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users/";
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync<UserData>(rootUrl);

  constructor(private data: UserData) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(updateObject: UserData): void {
    this.data = {
      ...this.data,
      ...updateObject,
    };
  }
}
