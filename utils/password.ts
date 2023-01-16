export const generatePassword = (
  length: number,
  uppLetters: boolean,
  lowLetters: boolean,
  numbers: boolean,
  symbols: boolean
): string => {
  // Define the characters that can be used in the password
  let characters = "";
  if (uppLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowLetters) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_+-=[]{}\\|;:'\",.<>?/";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
};
