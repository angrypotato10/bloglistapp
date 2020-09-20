// BLOG REDUCER

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BLOG':
            return [...state, action.data]
        case 'INIT_BLOGS':
            return action.data
        case 'INCREASE_LIKES': {
            const changedBlogs = [...state]
            changedBlogs.forEach((changedBlog) => {
                if (changedBlog.id === action.data.id) {
                    changedBlog.likes = action.data.likes
                }
            })
            return changedBlogs
        }
        case 'DELETE_BLOG': {
            const newBlogs = state.filter((blog) => blog.id !== action.data.id)
            return newBlogs
        }
        default:
            return state
    }
}

const flashMessageReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIFICATION_ERROR':
            return { status: 'notification-error', message: action.message }
        case 'NOTIFICATION_SUCCESS':
            return { status: 'notification-success', message: action.message }
        case 'NOTIFICATION_OVER':
            return null
        default:
            return state
    }
}

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'INIT_USER':
            return { user: action.user }
        case 'LOGOUT_USER':
            return null
        default:
            return state
    }
}

// ERROR REDUCER

const initState = {
    error: null,
}

const errorReducer = (state = initState, action) => {
    const { error } = action

    if (error) {
        return {
            error: error,
        }
    }

    return state
}

export { blogReducer, errorReducer, flashMessageReducer, loginReducer }
