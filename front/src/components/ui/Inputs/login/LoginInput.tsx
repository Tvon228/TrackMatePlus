import classes from "./loginInput.module.sass"

import { createSignal } from "solid-js"

import Eye from "lucide-solid/icons/eye"
import EyeOff from "lucide-solid/icons/eye-off"
import Mail from "lucide-solid/icons/mail"

export default function LoginInput() {
	const [password, setPassword] = createSignal("")
	const [viewPass, setViewPass] = createSignal(false)

	const togglePasswordVisibility = () => {
		setViewPass(!viewPass())
	}

	return (
		<>
			<div class={classes.content}>
				<span class={classes.text}>E-mail:</span>
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
						style={{ cursor: "default" }}
					/>
				</div>
			</div>
			<div class={classes.content}>
				<span class={classes.text}>Password:</span>
				<div class={classes.password_input}>
					<input
						class={classes.input}
						placeholder="Your Password"
						type={viewPass() ? "text" : "password"}
						value={password()}
						onInput={(e) => setPassword(e.target.value)}
					/>
					{viewPass() ? (
						<Eye
							size={18}
							color="#838287"
							class={classes.icon}
							onClick={togglePasswordVisibility}
						/>
					) : (
						<EyeOff
							size={18}
							color="#838287"
							class={classes.icon}
							onClick={togglePasswordVisibility}
						/>
					)}
				</div>
			</div>
		</>
	)
}
