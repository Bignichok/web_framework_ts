import { User } from "./models/user";

const user = new User({ name: "Den", age: 20 });

console.log(user.get("name"));
user.set({ age: 25 });
console.log(user.get("age"));
