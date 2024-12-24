import classes from "./forgotPassButton.module.sass"

export default function ForgotPassButton() {
    return (
		<div class={classes.buttons}>
			<button class={classes.button_pass}>Send code</button>
		</div>
	)
}