TP2/Parcial2 Aplicaciones Híbridas de Juan Pedro Di meola.

Prerrequisitos
Node.js versión 16 o superior
MongoDB corriendo en mongodb://localhost:27017
Git

Instalación

Clonar repositorio

Backend
cd backend
npm install
cp .env.example .env
ajustar MONGO_URI, JWT_SECRET, JWT_EXPIRES y PORT en .env
npm run dev
se levanta en http://localhost:4000

Frontend
cd ../frontend
npm install
npm run dev
se levanta en http://localhost:5174

Uso de la API
Register / Login
POST /api/usuarios/register
POST /api/usuarios/login

Logout / Refresh
POST /api/usuarios/logout
POST /api/usuarios/refresh

Alfajores (CRUD con upload de imageness)
Endpoint: /api/alfajores

Fabricantes (CRUD)
Endpoint: /api/fabricantes

En todas las rutas protegidas enviar cabecera
Authorization: Bearer [acá el token]

Navegación del Frontend
La aplicación incluye un Navbar con estos enlaces:
• Home (AlfajoresApp) → /alfajores
• Alfajores → listado y CRUD de alfajores
• Crear Alfajor → formulario en /alfajores/nuevo
• Fabricantes → listado y CRUD de fabricantes
• Login / Register (solo si no hay sesión)
• Logout (revoca sesión y vuelve a Login)

Importante: Gestión de sesión con localStorage y Axios!

Alumno: Juan Pedro Di meola | Apps Hibridas

