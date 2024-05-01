import fs from 'fs'
import path from 'path'

export const getAllUsers = () => {
    const usersFilePath = path.join(process.cwd(), "files", "users.json")
    const usersData = JSON.parse(fs.readFileSync(usersFilePath))
    return usersData
}