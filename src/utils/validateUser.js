import validateEmail from "./validateEmail";

export default function validateUser(user, users) {
  console.log(users.every(element => element.email !== user.email));
  return (
    user.name !== "" &&
    user.phone !== "" &&
    validateEmail(user.email) &&
    users.every(element => element.email !== user.email)
  );
}
