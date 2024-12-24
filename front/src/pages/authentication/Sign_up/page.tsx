import classes from "./signUp.module.sass"

import ForgotPassButton from "../../../components/ui/Buttons/forgot_pass/ForgotPassButton"
import ForgotPassInput from "../../../components/ui/Inputs/forgot_pass/ForgotPassInput"

import { useNavigate } from "@solidjs/router"
import { ArrowLeft } from "lucide-solid"

export default function SignUp() {
	const navigate = useNavigate()

	const handleBack = () => {
		navigate(-1)
	}

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.text}>
					<div class={classes.header}>
						<ArrowLeft
							onClick={handleBack}
							class={classes.icon}
							size={22}
							style={{ cursor: "pointer" }}
						/>
						<span class={classes.text_header}>
							Forgot Password?
						</span>
					</div>
					<span class={classes.text_info}>
						Please enter your email address to receive a
						verification code
					</span>
				</div>
				<div class={classes.main}>
					<ForgotPassInput />
					<ForgotPassButton />
				</div>
			</div>
		</div>
	)
}
