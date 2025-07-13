const otpGenerator = require("otp-generator") as {
  generate: (
    length: number,
    options?: {
      upperCaseAlphabets?: boolean;
      specialChars?: boolean;
      lowerCaseAlphabets?: boolean;
      digits?: boolean;
    }
  ) => string;
};

export default function generateOTP(): string {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
}
