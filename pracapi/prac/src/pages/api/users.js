import UserModels from "../../models/Users"
const { newUser, getUsers } = UserModels

export default function users(req, res) {
    if(req.method === 'POST') {
        const data = JSON.parse(req.body)
        newUser(data)
        res.status(200).send()
    } else if(req.method === 'GET') {
        const users = getUsers()
        res.status(200).json(users)
    }
}