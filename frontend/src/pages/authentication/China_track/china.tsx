import { createSignal, createEffect } from "solid-js"

import classes from "./Home.module.sass"

export default function China_track() {
	const [trackCode, setTrackCode] = createSignal("")
	const [isValid, setIsValid] = createSignal<boolean | null>(null)

	const checkTrackCode = async () => {
		if (!trackCode()) return
		const response = await fetch(`/track?trackCode=${trackCode()}`)
		setIsValid(response.ok ? true : response.status === 404 ? false : null)
	}

	createEffect(() => {
		if (trackCode()) {
			checkTrackCode()
		} else {
			setIsValid(null)
		}
	})

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<span class={classes.header_text}>Отследить посылку</span>
				<span class={classes.info_text}>
					Введите трек-номер вашей посылки, чтобы узнать, где она
					находится
				</span>
				<div class={classes.main}>
					<input
						type="text"
						placeholder="Введите трек-код"
						class={
							isValid() === null
								? ""
								: isValid()
								? classes.valid
								: classes.invalid
						}
						classList={{ [classes.focus]: true }}
						value={trackCode()}
						onInput={(e) => setTrackCode(e.currentTarget.value)}
					/>
					<button onClick={checkTrackCode}>Отследить</button>
				</div>
			</div>
		</div>
	)
}
