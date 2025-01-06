import classes from "./loginButton.module.sass"

import Chrome from "lucide-solid/icons/chrome"

export default function LoginButton() {
	return (
		<div class={classes.buttons}>
			<button class={classes.button_login}>Login</button>
			<button class={classes.button_Chrome}>
				<Chrome size={16} />
				<span>Continue with Google</span>
			</button>
		</div>
	)
}
