import jwt from "jsonwebtoken";
export const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token tidak ditemukan" });
        }
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded; // Menambahkan user ke request
        next(); // Lanjutkan ke route handler berikutnya
    }
    catch (error) {
        return res.status(401).json({
            message: "Token tidak valid atau sudah kadaluarsa",
            error,
        });
    }
};
//# sourceMappingURL=authMiddleware.js.map