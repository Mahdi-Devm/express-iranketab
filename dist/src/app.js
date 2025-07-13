const express = require("express");
const authController = require("./controllers/authController");
const app = express();
app.use(express.json());
app.post("/register", authController.register);
app.post("/login", authController.login);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=app.js.map