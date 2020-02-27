import validateEmail from "./validateEmail";

export default function validateUser(user, users) {
  return (
    user.name !== "" &&
    user.phone !== "" &&
    validateEmail(user.email) &&
    users.every(element => element.email !== user.email)
  );
}
