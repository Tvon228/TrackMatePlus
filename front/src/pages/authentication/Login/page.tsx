import classes from "./login.module.sass"

import { createSignal, onMount } from "solid-js"

import AnimationContainer, {
	AnimatedPosition,
} from "../../../components/AnimationContainer"
import LoginButton from "../../../components/ui/Buttons/login"
import LoginInput from "../../../components/ui/Inputs/login"

export default function Login() {
	const [animatedPosition, setAnimatedPosition] = createSignal({
		content: AnimatedPosition.LEFT,
		header: AnimatedPosition.BOTTOM,
		subheader: AnimatedPosition.BOTTOM,
		input: AnimatedPosition.BOTTOM,
		button: AnimatedPosition.BOTTOM,
		under_text: AnimatedPosition.BOTTOM,
	})
	onMount(() => {
		setTimeout(() => {
			setAnimatedPosition({
				...animatedPosition(),
				header: AnimatedPosition.VISIBLE,
			})
			setTimeout(() => {
				setAnimatedPosition({
					...animatedPosition(),
					subheader: AnimatedPosition.VISIBLE,
				})
				setTimeout(() => {
					setAnimatedPosition({
						...animatedPosition(),
						input: AnimatedPosition.VISIBLE,
					})
					setTimeout(() => {
						setAnimatedPosition({
							...animatedPosition(),
							button: AnimatedPosition.VISIBLE,
						})
						setTimeout(() => {
							setAnimatedPosition({
								...animatedPosition(),
								under_text: AnimatedPosition.VISIBLE,
							})
						}, 200)
					}, 200)
				})
			}, 200)
		}, 200)
	})

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.text}>
					<AnimationContainer position={animatedPosition().header}>
						<span class={classes.text_header}>Welcome</span>
					</AnimationContainer>
					
					<AnimationContainer position={animatedPosition().subheader}>
						<span class={classes.text_info}>
							Enter your email and password below to login to your
							account
						</span>
					</AnimationContainer>
				</div>
				<AnimationContainer position={animatedPosition().input}>
					<div class={classes.main}>
						<LoginInput />

						<AnimationContainer
							position={animatedPosition().button}
						>
							<LoginButton />
							<AnimationContainer
								position={animatedPosition().under_text}
							>
								<div class={classes.under_text}>
									<a
										class={classes.link}
										href="/user/forgot_password"
									>
										Forgot your password?
									</a>
									<div class={classes.sign_up}>
										<span>Don't have an account?</span>
										<a
											class={classes.link}
											href="/user/create_account"
										>
											Create account
										</a>
									</div>
								</div>
							</AnimationContainer>
						</AnimationContainer>
					</div>
				</AnimationContainer>
			</div>
		</div>
	)
}
