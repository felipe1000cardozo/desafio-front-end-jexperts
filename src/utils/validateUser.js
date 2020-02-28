import validateEmail from "./validateEmail";
import emptyUserFields from "./emptyUserFields";

export default function validateUser(user, users) {
  return (
    emptyUserFields(user) &&
    validateEmail(user.email) &&
    users.every(element => element.email !== user.email)
  );
}
