import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseLike } from '../reducers/actions'

const SingleBlog = ({ blog }) => {
    const dispatch = useDispatch()

    const increaseLikes = (blog) => {
        dispatch(increaseLike(blog))
    }

    if (!blog) {
        return null
    }

    return (
        <div>
            <div>
                <h2>{blog.url}</h2>
                <div>
                    <div>
                        <a href={blog.url}>{blog.url}</a>
                    </div>
                    {blog.likes} likes
                    <button onClick={() => increaseLikes(blog)}>like</button>
                </div>
                <div>added by {blog.user.name}</div>
            </div>
        </div>
    )
}

export default SingleBlog
