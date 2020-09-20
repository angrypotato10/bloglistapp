import React from 'react'

// commit to git

const User = ({ user }) => {
    if (!user) {
        return null
    }

    return (
        <div>
            <h2>{user.username}</h2>
            <h2>Added blogs</h2>
            <ul>
                {user.blogs.map((blog, index) => (
                    <li key={index}>{blog.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default User
