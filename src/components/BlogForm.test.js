import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

test('<BlogForm /> form calls the event handler it received as props with the right details when a new blog is created', () => {
	const createBlog = jest.fn()

	const component = render(<BlogForm createBlog={createBlog} />)

	const input = component.container.querySelector('#author')
	const form = component.container.querySelector('form')

	fireEvent.change(input, {
		target: { value: 'Benedict Cumberbatch' },
	})
	fireEvent.submit(form)

	expect(createBlog.mock.calls).toHaveLength(1)
	expect(createBlog.mock.calls[0][0].author).toBe('Benedict Cumberbatch')
})
