const post = (user) => {
    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
}

const get = async () => {
    const list = await fetch('/api/users')
    const users = await list.json()

    return users
}

const UsersServices = {
    post,
    get
}

export default UsersServices