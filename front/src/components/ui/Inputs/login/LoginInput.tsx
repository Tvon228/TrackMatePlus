import classes from "./loginInput.module.sass"

import { createSignal } from "solid-js"

import { Eye, EyeOff } from "lucide-solid"

export default function LoginInput() {
    const [password, setPassword] = createSignal("")
    const [ viewPass, setViewPass ] = createSignal(false)

    const togglePasswordVisibility = () => {
		setViewPass(!viewPass())
	}

	return (
		<>
			<div class={classes.content}>
				<span class={classes.text}>E-mail:</span>
				<input
					class={classes.input}
					type="email"
					placeholder="m@example.com"
				/>
			</div>
			<div class={classes.content}>
				<div class={classes.password_header}>
					<span class={classes.text}>Password:</span>
					<a class={classes.text_forgot} href="/user/sign_up">Forgot your password?</a>
				</div>
				<div class={classes.password_input}>
					<input
						class={classes.input}
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
