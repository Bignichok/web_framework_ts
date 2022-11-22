import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { SyncAPI } from "./SyncAPI";
import { Eventing } from "./Eventing";

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3004/users/";

export class User extends Model<UserData> {
  static buildUser(attrs: UserData): User {
    return new User(
      new Attributes<UserData>(attrs),
      new SyncAPI<UserData>(rootUrl),
      new Eventing()
    );
  }
}
