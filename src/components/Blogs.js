import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'

import {
    createBlog,
    successMessage,
    increaseLike,
    deleteBlog,
} from '../reducers/actions'

const Blogs = () => {
    const dispatch = useDispatch()

    const blogs = useSelector((store) => store.blogs)

    const increaseLikes = (blog) => {
        dispatch(increaseLike(blog))
    }

    const handleDelete = (id) => {
        dispatch(deleteBlog(id))
    }

    const showBlogs = () => (
        <div>
            <h2>Blogs</h2>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    increaseLikes={increaseLikes}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )

    const blogFormRef = React.createRef()

    const blogForm = () => (
        <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm createBlog={addBlog} />
        </Togglable>
    )

    const addBlog = (newBlog) => {
        blogFormRef.current.toggleVisibility()
        dispatch(createBlog(newBlog))

        dispatch(successMessage('New blog successfully added'))
    }

    return (
        <>
            {blogForm()}
            {showBlogs()}
        </>
    )
}

export default Blogs
