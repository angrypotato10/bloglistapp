import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Blogs from './components/Blogs'
import SingleBlog from './components/SingleBlog'
import Notification from './components/Notification'
import Login from './components/Login'
import Users from './components/Users'
import User from './components/User'

import userService from './services/users'
import { initializeBlogs, initUser } from './reducers/actions'

import { useDispatch, useSelector } from 'react-redux'

//TODO: implement JSS
import './index.css'

const App = () => {
    const dispatch = useDispatch()

    const flashMessage = useSelector((store) => store.flashMessage)
    const user = useSelector((store) => store.user)
    const blogs = useSelector((store) => store.blogs)

    const [users, setUsers] = useState([])
    // const [blogs, setBlogs] = useState([])

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [dispatch])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            dispatch(initUser(user))
        }
    }, [dispatch])

    useEffect(() => {
        userService.getUsers().then((data) => setUsers(data))
    }, [])

    useEffect(() => {
        const allBlogs = users.map((user) => user.blogs.map((blog) => blog))
        console.log(allBlogs)
    }, [users])

    let match = useRouteMatch('/users/:id')
    const matchedUser = match
        ? users.find((user) => user.id === match.params.id)
        : null

    let matchForBlog = useRouteMatch('/blogs/:id')
    const matchedBlog = matchForBlog
        ? blogs.find((blog) => blog.id === matchForBlog.params.id)
        : null

    console.log('matchedBlog', matchedBlog)
    console.log('blogs: ', blogs)

    return (
        <div>
            <Notification flashMessage={flashMessage} />
            <Login />

            <Switch>
                <Route path="/users/:id">
                    <User user={matchedUser} />
                </Route>
                <Route path="/users">
                    <Users users={users} />
                </Route>
                <Route path="/blogs/:id">
                    <SingleBlog blog={matchedBlog} />
                </Route>
                <Route path="/blogs">
                    {user === null ? null : (
                        <div>
                            <Blogs />
                        </div>
                    )}
                </Route>
            </Switch>
        </div>
    )
}

export default App
