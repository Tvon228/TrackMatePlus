import classes from "./GettingStart.module.sass"

import ToolBar from "../../components/ToolBar"

import { createSignal } from "solid-js"

import Plus from "lucide-solid/icons/plus"

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

	const TvonIcon = () => (
		<svg
			width="60"
			height="60"
			viewBox="0 0 492 318"
			fill="none"
			class={classes.tvonIcon}
		>
			<path
				d="M133 1C97.2955 48.0749 77.4996 86 61.4996 130C45.4996 174 46.4995 211.5 77.4996 197.5C94.5094 189.818 151.5 164 133 154.547C89.9329 132.865 -16.2326 126.855 4.49982 118C25.2322 109.145 185 89 179 98.5C172.999 108 139.126 195.651 151.5 197.5C163.873 199.349 244.826 104.201 242 102M242 102C252.631 88.6845 265.5 80.5 268.5 89C271.5 97.5 275.442 109.088 252 147.5M242 102C199.883 168.873 192.5 189.5 196 197.5C199.5 205.5 228.558 185.912 252 147.5M252 147.5L295 89L245.5 197.5C298.233 102.65 334.5 76 334.5 89C334.5 102 290 192.5 295 197.5C300 202.5 315.425 191.389 334.5 175M4.49982 316.5C153.31 247.601 367.466 168.378 491.5 147.5"
				stroke="currentColor"
				stroke-width="10"
			/>
		</svg>
	)

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
						<Plus size={16} color="var(--icon-color)" />
						<span class={classes.addBlock_text}>Add Block</span>
					</div>
					<div class={classes.tvon}>
						<TvonIcon/>
					</div>
				</div>
			</div>
		</div>
	)
}
