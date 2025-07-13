import express from "express";
const authController = require("./controllers/authController");
import Otp from "./controllers/OtpController";
const app = express();
app.use(express.json());

app.post("/register", authController.register);
app.post("/login", authController.login);
app.post("/Otpcode", Otp);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
