import classes from "./login.module.sass"

import { createSignal, onMount } from "solid-js"

import AnimationContainer, {
	AnimatedPosition,
} from "../../../components/AnimationContainer"
import LoginButton from "../../../components/ui/Buttons/login/LoginButton"
import LoginInput from "../../../components/ui/Inputs/login/LoginInput"

export default function Login() {
	const [animatedPosition, setAnimatedPosition] = createSignal({
		content: AnimatedPosition.LEFT,
		header: AnimatedPosition.BOTTOM,
		subheader: AnimatedPosition.BOTTOM,
		input: AnimatedPosition.BOTTOM,
		button: AnimatedPosition.BOTTOM,
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
					}, 200)
				})
			}, 200)
		}, 300)
	})

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.text}>
					<AnimationContainer position={animatedPosition().header}>
						<span class={classes.text_header}>Login</span>
					</AnimationContainer>
					<AnimationContainer position={animatedPosition().subheader}>
						<span class={classes.text_info}>
							Enter your email below to login to your account
						</span>
					</AnimationContainer>
				</div>
				<AnimationContainer position={animatedPosition().input}>
					<div class={classes.main}>

						<LoginInput/>

						<AnimationContainer
							position={animatedPosition().button}
						>
							<LoginButton />
						</AnimationContainer>

					</div>
				</AnimationContainer>
			</div>
		</div>
	)
}
