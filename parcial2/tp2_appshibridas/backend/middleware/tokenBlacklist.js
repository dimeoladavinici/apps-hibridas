const blacklist = []
export const addToBlacklist = token => { blacklist.push(token) }
export const isBlacklisted = token => blacklist.includes(token)