import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
export const register = async (req, res, next) => {
    const { full_name, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await prisma.user.create({
            data: {
                full_name,
                username: full_name.toLowerCase().replace(/\s+/g, "_"),
                email,
                password: hashedPassword,
            },
        });
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({
            code: 200,
            status: "success",
            message: "Pembuatan akun berhasil",
            token: token,
            data: {
                id: user.id,
                username: user.username,
                full_name: user.full_name,
                email: user.email,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            code: 500,
            status: "error",
            message: "Error saat membuat akun",
            error,
        });
    }
};
export const login = async (req, res, next) => {
    const { emailorusername, password } = req.body;
    try {
        if (emailorusername.includes("@")) {
            // log pke email
            const email = emailorusername;
            const user = await prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                return res.status(401).json({ message: "Email atau Password salah" });
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return res.status(401).json({
                    message: "Email atau Password salah",
                });
            }
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Login menggunakan email berhasil",
                token: token,
                data: {
                    user_id: user.id,
                    username: user.username,
                    name: user.full_name,
                    email: user.email,
                },
            });
        }
        else {
            // log pke usn
            const username = emailorusername;
            const user = await prisma.user.findUnique({
                where: { username },
            });
            if (!user) {
                return res
                    .status(401)
                    .json({ message: "Username atau Password salah" });
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return res
                    .status(401)
                    .json({ message: "Username atau Password salah" });
            }
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Login menggunakan username berhasil",
                token: token,
                data: {
                    user_id: user.id,
                    username: user.username,
                    name: user.full_name,
                    email: user.email,
                },
            });
        }
    }
    catch (error) {
        res.status(500).json({
            code: 500,
            status: "error",
            message: "Error saat login",
            error,
        });
    }
};
//# sourceMappingURL=authController.js.map