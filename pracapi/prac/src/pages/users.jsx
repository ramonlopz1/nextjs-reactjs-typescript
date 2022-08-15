import styles from '../styles/Users.module.css'
import UsersServices from '../services/service-users'
import { useEffect, useState } from 'react'

export default function Users() {

    const {post, get} = UsersServices
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        get().then(usersList => setList(usersList))
        
    }, [get])
    
    const renderUsers = () => {
        if(list)

        return list.map(user => {
            const usuario = user
            return (
                <div key={user.id}>
                    <span>name: {usuario.name}</span>
                    <span>age: {usuario.age}</span>
                </div>
            )
        })
    }

    return (
        <div className={styles.wrapper}>
            <input type="text" name="name" id=""
            onChange={e => setName(e.target.value)}
            />
            <input type="text" name="age" id="" 
            onChange={e => setAge(e.target.value)}
            />
            <button onClick={post({name, age})} >Enviar</button>
            {renderUsers()}
        </div>
    )
}