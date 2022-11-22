import { Attributes } from "./Attribute";
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
  public attributes: Attributes<UserData>;

  constructor(attrs: UserData) {
    this.attributes = new Attributes<UserData>(attrs);
  }
}
