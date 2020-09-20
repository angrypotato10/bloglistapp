import blogService from '../services/blogs'

// blog action creators

export const initializeBlogs = () => {
    return (dispatch) => {
        blogService.getAll().then((blogs) => {
            const sortedBlogs = blogs.sort((a, b) => a.likes < b.likes)
            dispatch({ type: 'INIT_BLOGS', data: sortedBlogs })
        })
    }
}

export const createBlog = (newBlog) => {
    return (dispatch) => {
        blogService.create(newBlog).then((createdBlog) => {
            dispatch({
                type: 'NEW_BLOG',
                data: createdBlog,
            })
        })
    }
}

export const increaseLike = (blog) => {
    return (dispatch) => {
        blogService.increaseLikes(blog).then((updatedBlog) => {
            dispatch({
                type: 'INCREASE_LIKES',
                data: updatedBlog,
            })
        })
    }
}

export const deleteBlog = (id) => {
    return (dispatch) => {
        blogService.deleteBlog(id).then((response) => {
            dispatch({
                type: 'DELETE_BLOG',
                data: { id },
            })
        })
    }
}

// notification action creators
export const notificationOver = () => {
    return {
        type: 'NOTIFICATION_OVER',
    }
}

export const errorMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: 'NOTIFICATION_ERROR', message })
        setTimeout(() => {
            dispatch(notificationOver())
        }, 5000)
    }
}

export const successMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: 'NOTIFICATION_SUCCESS', message })
        setTimeout(() => {
            dispatch(notificationOver())
        }, 5000)
    }
}

// login action creators
export const initUser = (user) => {
    return (dispatch) => {
        blogService.setToken(user.token)
        dispatch({
            type: 'INIT_USER',
            user,
        })
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    }
}
