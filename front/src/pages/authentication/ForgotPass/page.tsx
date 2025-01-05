import classes from "./ForgotPass.module.sass"

import AnimationContainer, {
	AnimatedPosition,
} from "../../../components/AnimationContainer"
import ForgotPassButton from "../../../components/ui/Buttons/forgotPass/ForgotPassButton"
import ForgotPassInput from "../../../components/ui/Inputs/forgotPass/ForgotPassInput"

import { useNavigate } from "@solidjs/router"
import { createSignal, onMount } from "solid-js"
import ArrowLeft from "lucide-solid/icons/arrow-left"

export default function ForgotPass() {
	const navigate = useNavigate()

	const handleBack = () => {
		navigate(-1)
	}

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
		}, 200)
	})

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.text}>
					<AnimationContainer position={animatedPosition().header}>
						<div class={classes.header}>
							<ArrowLeft
								onClick={handleBack}
								class={classes.icon}
								size={22}
							/>
							<span class={classes.text_header}>
								Forgot password?
							</span>
						</div>
					</AnimationContainer>
					<AnimationContainer position={animatedPosition().subheader}>
						<span class={classes.subheader}>
							Please enter your email address to receive a
							verification code
						</span>
					</AnimationContainer>
				</div>
				<div class={classes.main}>
					<AnimationContainer position={animatedPosition().input}>
						<ForgotPassInput />
					</AnimationContainer>
					<AnimationContainer position={animatedPosition().button}>
						<ForgotPassButton />
					</AnimationContainer>
				</div>
			</div>
		</div>
	)
}
