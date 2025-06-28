
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import validarCampos from "./middleware/validarCampos.js"
import db from "./db.js"
import alfajoresRoutes from "./routes/alfajores.js"
import fabricantesRoutes from "./routes/fabricantes.js"
import usuariosRoutes from "./routes/usuarios.js"

dotenv.config()

const app = express()

app.use(helmet())
app.use(morgan("dev"))
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())
app.use("/uploads", express.static("uploads", { maxAge: 31536000000 }))

app.use("/api/usuarios", usuariosRoutes)
app.use("/api/alfajores", alfajoresRoutes)
app.use("/api/fabricantes", fabricantesRoutes)
app.use(validarCampos)

app.use((_req, res) => res.status(404).json({ error: "Not found" }))
app.use((_err, _req, res) => res.status(500).json({ error: "Server error" }))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
