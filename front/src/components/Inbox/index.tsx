import classes from "./Inbox.module.sass"

import { createSignal, onMount } from "solid-js"

import MenuInbox from "./MenuInbox"
import InboxComponent from "./InboxComponent"

import MessangerInbox from "./Messanger"

interface InboxProps {
	onInboxClose: () => void
}

export default function Inbox(props: InboxProps) {
	const [isActive, setIsActive] = createSignal(false)

	onMount(() => {
		setTimeout(() => setIsActive(true), 0)
	})

	const handleClose = () => {
		setIsActive(false)
		setTimeout(() => props.onInboxClose(), 300)
	}

	return (
		<div
			classList={{
				[classes.container]: true,
				[classes.containerOpen]: isActive(),
			}}
			onClick={handleClose}
		>
			<div
				classList={{
					[classes.content]: true,
					[classes.content_active]: isActive(),
				}}
				onClick={(e) => e.stopPropagation()}
			>
				<MenuInbox />
				<InboxComponent />
				<MessangerInbox />
			</div>
		</div>
	)
}
