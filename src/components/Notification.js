import React from 'react'

const Notification = ({ flashMessage }) => {
	if (flashMessage === null) {
		return null
	}

	return <div className={flashMessage.status}>{flashMessage.message}</div>
}

export default Notification
