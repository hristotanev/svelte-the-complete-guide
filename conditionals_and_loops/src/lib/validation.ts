export function validatePassword(password: string): [boolean, string] {
  if (password.length > 0 && password.length < 5) {
    return [false, "The password cannot be shorter than 5 characters."];
  }

  if (password.length > 0 && password.length > 10) {
    return [false, "The password cannot be longer than 10 characters."];
  }

  return [true, ""];
};
