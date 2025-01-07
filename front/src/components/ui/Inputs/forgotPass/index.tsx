import classes from "./ForgotPassInput.module.sass"

import Mail from "lucide-solid/icons/mail"

export default function ForgotPassInput() {
	return (
		<div class={classes.content}>
			<span class={classes.input_header}>Email:</span>
			<div class={classes.mail}>
				<input
					class={classes.input}
					type="email"
					placeholder="m@example.com"
				/>
				<Mail
					size={18}
					color="#838287"
					class={classes.icon}
				/>
			</div>
		</div>
	)
}
