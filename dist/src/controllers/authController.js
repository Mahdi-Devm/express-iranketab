const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
async function register(req, res) {
    try {
        const { name, email, phone, password, role = "USER" } = req.body;
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ error: "تمامی فیلدها الزامی هستند" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role,
            },
        });
        const token = jwt.sign({
            userId: user.id,
            role: user.role,
        }, process.env.JWT_SECRET, { expiresIn: "1h" });
        delete user.password;
        res.status(201).json({
            success: true,
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        console.error("خطا در ثبت نام:", error);
        res.status(500).json({ error: "خطا در سرور" });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(404).json({ error: "کاربر یافت نشد" });
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({ error: "رمز عبور نادرست" });
        }
        const token = jwt.sign({
            userId: user.id,
            role: user.role,
        }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({
            success: true,
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        console.error("خطا در ورود:", error);
        res.status(500).json({ error: "خطا در سرور" });
    }
}
module.exports = {
    register,
    login,
};
//# sourceMappingURL=authController.js.map