import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Blog = ({ blog, increaseLikes, handleDelete }) => {
    const [isVisible, setIsVisible] = useState(false)

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
    }

    const visibility = { display: isVisible ? '' : 'none' }

    const handleView = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div style={blogStyle}>
            <div className="firstView">
                <Link to={`/blogs/${blog.id}`}>
                    {blog.title} {blog.author}
                </Link>
                <button onClick={handleView}>
                    {isVisible ? 'hide' : 'view'}
                </button>
            </div>
            <div style={visibility} className="secondView">
                <div>{blog.url}</div>
                <div>
                    likes {blog.likes}
                    <button onClick={() => increaseLikes(blog)}>like</button>
                </div>
                <div>{blog.user.name}</div>
                <button
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => {
                        if (
                            window.confirm(
                                `Remove blog ${blog.title} ${blog.author}?`
                            )
                        ) {
                            handleDelete(blog.id)
                        }
                    }}
                >
                    remove
                </button>
            </div>
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    increaseLikes: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default Blog
