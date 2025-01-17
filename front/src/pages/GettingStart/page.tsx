import classes from "./GettingStart.module.sass"

import Menu from "../../components/Menu"
import ToolBar from "../../components/ToolBar"

import { createSignal } from "solid-js"

import Plus from "lucide-solid/icons/plus"
import Tvon from "../../tvon.svg"

export default function GettingStart() {
	const [checked, setChecked] = createSignal(false)
	const [_, setContent] = createSignal("")
	const [subheaderText] = createSignal(
		"Start typing here to create your document. Press '/' for commands."
	)

	const toggleCheckbox = () => {
		setChecked(!checked())
	}

	const handleCommand = (cmd: string) => {
		console.log("Command:", cmd)

		if (cmd == "heading") {
			setContent((prev) => prev + "\n# Заголовок\n")
		} else if (cmd == "list") {
			setContent((prev) => prev + "\n# Элемент списка\n")
		}
	}

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.header}>
					<div class={classes.authentication}>
						<a
							class={`${classes.btn} ${classes.btnLogin} `}
							href="/user/login"
						>
							Login
						</a>
						<a
							class={`${classes.btn} ${classes.btnCreateAcc} `}
							href="/user/create_account"
						>
							Create account
						</a>
					</div>
				</div>
				<div class={classes.main}>
					<ToolBar onCommand={handleCommand} />
					<div
						contentEditable
						class={`${classes.text} ${classes.header_text}`}
						data-placeholder="New page"
						onInput={(e) => {
							const target = e.currentTarget
							if (target.textContent?.trim() === "") {
								target.textContent = ""
							}
						}}
					>
						Welcome to Your Enhanced Votion
					</div>
					<div
						contentEditable
						class={`${classes.text} ${classes.subheader_text}`}
						data-placeholder="Start typing here to create your document. Press '/' for commands."
						onInput={(e) => {
							const target = e.currentTarget
							if (target.textContent?.trim() === "") {
								target.textContent = ""
							}
						}}
					>
						{subheaderText()}
					</div>
					<div class={classes.checkbox}>
						<div class={classes.checkbox_main}>
							<input
								type="checkbox"
								class={classes.checkbox_input}
								onClick={toggleCheckbox}
							/>
							<div
								contentEditable
								class={classes.text}
								classList={{
									[classes.checkbox_text]: true,
									[classes.checkbox_finish]: checked(),
								}}
								data-placeholder="Start typing here to create your document. Press '/' for commands."
								onInput={(e) => {
									const target = e.currentTarget
									if (target.textContent?.trim() === "") {
										target.textContent = ""
									}
								}}
							>
								Try creating a new task
							</div>
						</div>
					</div>
					<div class={classes.addBlock_btn}>
						<Plus size={16} color="#ffffff" />
						<span class={classes.addBlock_text}>Add Block</span>
					</div>
					<div class={classes.tvon}>
						<img src={Tvon} alt="Logo" width="60" height="60"/>
					</div>
				</div>
			</div>
		</div>
	)
}
