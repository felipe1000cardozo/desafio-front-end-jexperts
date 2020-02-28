export default function emptyUserFields(user) {
  return user.name !== "" && user.phone !== "";
}
