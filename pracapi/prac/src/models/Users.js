const users = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const newUser = (user) => {
    if (!user.id) user.id = sequence.id
    users[user.id] = user
}

const getUsers = () => {
    return Object.values(users)
}

const UserModels = {
    newUser,
    getUsers
}

export default UserModels