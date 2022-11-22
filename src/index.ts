import { User } from "./models/User";

const user = new User({ name: "Super", age: 20, id: 1 });

user.on("save", () => {
  console.log(user);
});

user.save();
console.log(user.get("name"));
