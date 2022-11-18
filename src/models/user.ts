import axios, { AxiosResponse } from "axios";

import { Eventing } from "./Eventing";

interface UserData {
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
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

  fetch(): void {
    axios
      .get(`http://localhost:3004/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        console.log(response);
      });
  }

  save(): void {
    const userId = this.get("id");
    console.log(userId);
    if (userId) {
      axios.put(`http://localhost:3004/users/${userId}`, this.data);
    } else {
      axios.post("http://localhost:3004/users", this.data);
    }
  }
}
