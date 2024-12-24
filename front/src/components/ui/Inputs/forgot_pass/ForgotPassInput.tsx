import classes from "./ForgotPassInput.module.sass"

export default function ForgotPassInput() {
	return (
		<div class={classes.content}>
			<span class={classes.input_header}>Email:</span>
			<input
				class={classes.input_forgot}
				type="email"
				placeholder="m@example.com"
			/>
		</div>
	)
}
