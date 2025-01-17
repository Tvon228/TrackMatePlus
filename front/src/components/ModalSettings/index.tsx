import classes from "./Settings.module.sass"

import { createSignal, onMount } from "solid-js"

interface ModalSettingsProps {
	onClose: () => void
}

export default function ModalSettings(props: ModalSettingsProps) {
	const [isActive, setIsActive] = createSignal(false)

	onMount(() => {
		// Активируем анимацию после монтирования
		setTimeout(() => setIsActive(true), 0)
	})

	const handleClose = () => {
		setIsActive(false)
		setTimeout(() => props.onClose(), 300)
	}

	return (
		<div
			classList={{
				[classes.container]: true,
				[classes.container_active]: isActive(),
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
				<span class={classes.items}>Settings</span>
				<p class={classes.items}>Here you can configure your settings.</p>
			</div>
		</div>
	)
}
