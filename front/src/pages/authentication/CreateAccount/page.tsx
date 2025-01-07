import classes from "./CreateAccount.module.sass"

import AnimationContainer, {
	AnimatedPosition,
} from "../../../components/AnimationContainer"
import CreateAccInputs from "../../../components/ui/Inputs/createAccount"
import CreateAccButton from "../../../components/ui/Buttons/createAccount"

import { useNavigate } from "@solidjs/router"
import { createSignal, onMount } from "solid-js"
import ArrowLeft from "lucide-solid/icons/arrow-left"

export default function CreateAccount() {
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
						<span class={classes.header}>
							<ArrowLeft
								onClick={handleBack}
								class={classes.icon}
								size={22}
							/>
							<span class={classes.text_header}>
								Create account
							</span>
						</span>
					</AnimationContainer>
					<AnimationContainer position={animatedPosition().subheader}>
						<span class={classes.subheader}>
							Enter your email and password below to create your
							account
						</span>
					</AnimationContainer>
				</div>
				<AnimationContainer position={animatedPosition().input}>
					<div class={classes.main}>
						<CreateAccInputs />

						<AnimationContainer
							position={animatedPosition().button}
						>
							<CreateAccButton />
						</AnimationContainer>
					</div>
				</AnimationContainer>
			</div>
		</div>
	)
}
