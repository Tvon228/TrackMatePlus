import classes from "./CreateAccount.module.sass"

import { createSignal } from "solid-js"

import Mail from "lucide-solid/icons/mail"
import User from "lucide-solid/icons/user"
import Eye from "lucide-solid/icons/eye"
import EyeOff from "lucide-solid/icons/eye-off"

interface IconProps {
	isVisible: boolean
	onToggle: () => void
}

export default function CreateAccInputs() {
	const [password, setPassword] = createSignal("")
	const [viewPass, setViewPass] = createSignal(false)

	const togglePasswordVisibility = () => {
		setViewPass(!viewPass())
	}

	const Icon = (props: IconProps) => {
		return (
			<span onClick={props.onToggle}>
				{props.isVisible ? (
					<Eye
						size={18}
						color="#838287"
						style={{ cursor: "pointer" }}
						class={classes.icon}
					/>
				) : (
					<EyeOff
						size={18}
						color="#838287"
						style={{ cursor: "pointer" }}
						class={classes.icon}
					/>
				)}
			</span>
		)
	}

	return (
		<>
			<div class={classes.content}>
				<span class={classes.input_header}>Name:</span>
				<div class={classes.name}>
					<input
						class={classes.input}
						type="text"
						placeholder="Your Name"
					/>
					<User size={18} color="#838287" class={classes.icon} />
				</div>
			</div>
			<div class={classes.content}>
				<span class={classes.input_header}>Email:</span>
				<div class={classes.mail}>
					<input
						class={classes.input}
						type="email"
						placeholder="m@example.com"
					/>
					<Mail size={18} color="#838287" class={classes.icon} />
				</div>
			</div>
			<div class={classes.content}>
				<span class={classes.input_header}>Password:</span>
				<div class={classes.password_container}>
					<input
						class={classes.input}
						placeholder="Your Password"
						type={viewPass() ? "text" : "password"}
						value={password()}
						onInput={(e) => setPassword(e.target.value)}
					/>
					<Icon
						isVisible={viewPass()}
						onToggle={togglePasswordVisibility}
					/>
				</div>
			</div>
		</>
	)
}
