import classes from "./GettingStart.module.sass"

import Menu from "../../components/Menu"

import { createSignal } from "solid-js"

export default function GettingStart() {
	const [headerText] = createSignal("Getting Started")
	const [subheaderText] = createSignal("Welcome to Notion")

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.header}>
					<Menu />
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
						Getting Start
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
				</div>
			</div>
		</div>
	)
}
