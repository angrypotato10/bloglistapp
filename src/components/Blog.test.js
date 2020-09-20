import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'

describe('<Blog />', () => {
	let component, mockHandlerLikes, mockHandlerDelete

	beforeEach(() => {
		const blog = {
			title: 'Title of the blog',
			author: 'John Morris',
			url: 'www.google.com',
			likes: 7,
			user: { name: 'John Moss' },
		}

		mockHandlerLikes = jest.fn()
		mockHandlerDelete = jest.fn()

		component = render(
			<Blog
				blog={blog}
				increaseLikes={mockHandlerLikes}
				handleDelete={mockHandlerDelete}
			/>
		)
	})
	test('displays only title and author by default', () => {
		const firstDiv = component.container.querySelector('.firstView')
		const secondDiv = component.container.querySelector('.secondView')

		expect(component.container).toHaveTextContent('Title of the blog')
		expect(component.container).toHaveTextContent('John Morris')
		expect(firstDiv).not.toHaveStyle('display: none')
		expect(secondDiv).toHaveStyle('display: none')
	})

	test('url and number of likes are shown when the button is clicked', () => {
		const button = component.getByText('view')
		fireEvent.click(button)

		const secondDiv = component.container.querySelector('.secondView')
		expect(secondDiv).not.toHaveStyle('display: none')
	})

	test('if the like button is clicked twice, the event handler received as props is called twice', async () => {
		const button = component.getByText('like')

		fireEvent.click(button)
		await wait(() => expect(mockHandlerLikes).toHaveBeenCalledTimes(1))
		fireEvent.click(button)

		expect(mockHandlerLikes.mock.calls).toHaveLength(2)
	})
})
