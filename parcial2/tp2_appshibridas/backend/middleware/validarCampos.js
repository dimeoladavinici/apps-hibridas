
export default (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(e => ({ field: e.path, message: e.message }))
        return res.status(400).json({ errors })
    }
    next(err)
}
