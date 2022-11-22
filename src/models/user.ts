import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3004/users/";
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync<UserData>(rootUrl);
  public attributes: Attributes<UserData>;

  constructor(attrs: UserData) {
    this.attributes = new Attributes<UserData>(attrs);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(update: UserData): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch() {
    const id = this.get("id");
    if (typeof id === "number") {
      return this.sync.fetch(id).then((response: AxiosResponse): void => {
        console.log(response);
      });
    } else {
      throw new Error("Can not fetch without an id");
    }
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
