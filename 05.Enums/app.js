var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["READ_ONLY"] = 1)] = "READ_ONLY";
  Role[(Role["AUTHOR"] = 2)] = "AUTHOR";
})(Role || (Role = {}));
var person = {
  name: "Shukra",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
if (person.role === Role.AUTHOR) {
  console.log("Is Author");
}
