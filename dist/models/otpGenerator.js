"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateOTP;
const otpGenerator = require("otp-generator");
function generateOTP() {
    return otpGenerator.generate(6, {
        upperCaseAlphabets: true,
        lowerCaseAlphabets: false,
        specialChars: false,
    });
}
