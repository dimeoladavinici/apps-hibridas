
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, 'uploads'),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
})

const fileFilter = (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase()
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) cb(null, true)
    else cb(new Error('Invalid file type'))
}

export default multer({ storage, limits: { fileSize: 2 * 1024 * 1024 }, fileFilter })
