import classes from "./CreateAccount.module.sass"

import Chrome from "lucide-solid/icons/chrome"

export default function CreateAccButton() {
	return (
		<div class={classes.buttons}>
			<button class={classes.button_login}>Create account</button>
			<button class={classes.button_Chrome}>
				<Chrome size={16} />
				<span>Create account with Google</span>
			</button>
		</div>
	)
}
