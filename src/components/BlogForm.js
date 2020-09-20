import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
	const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })

	const addBlog = (event) => {
		event.preventDefault()
		createBlog(newBlog)
		setNewBlog({ title: '', author: '', url: '' })
	}
	return (
		<div>
			<h2>Create new</h2>
			<form onSubmit={addBlog}>
				<div>
					title:
					<input
						value={newBlog.title}
						onChange={({ target }) => {
							setNewBlog({ ...newBlog, title: target.value })
						}}
					></input>
				</div>
				<div>
					author:
					<input
						id="author"
						value={newBlog.author}
						onChange={({ target }) => {
							setNewBlog({ ...newBlog, author: target.value })
						}}
					></input>
				</div>
				<div>
					url:
					<input
						value={newBlog.url}
						onChange={({ target }) => {
							setNewBlog({ ...newBlog, url: target.value })
						}}
					></input>
				</div>
				<button type="submit">create</button>
			</form>
		</div>
	)
}

BlogForm.propTypes = {
	createBlog: PropTypes.func.isRequired,
}
export default BlogForm
