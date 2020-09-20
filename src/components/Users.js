import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {
    const showUsers = () => (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Blogs created</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <Link to={`/users/${user.id}`}>
                                {user.username}
                            </Link>
                        </td>
                        <td>{user.blogs.length}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

    return (
        <div>
            <h2>Users</h2>
            {users ? showUsers() : null}
        </div>
    )
}

export default Users
