import classes from "./loginButton.module.sass"

import { Github } from "lucide-solid"

export default function LoginButton() {
    return (
		<div class={classes.buttons}>
			<button class={classes.button_login}>Login</button>
			<div class={classes.divider}>
				<span>or continue with</span>
			</div>
			<button class={classes.button_GitHub}>
				<Github size={16} />
				<span>GitHub</span>
			</button>
			<div class={classes.sign_up}>
				<span>Don't have an account?</span>
				<a>
					Sign up
				</a>
			</div>
		</div>
	)
}