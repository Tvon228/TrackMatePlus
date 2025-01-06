import classes from "./Home.module.sass"

import { createSignal } from "solid-js"

import Menu from "../../components/Menu/Menu"
import PanelLeft from "lucide-solid/icons/panel-left"

export default function Home() {
	const [isOpen, setIsOpen] = createSignal(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen())
	}

	return (
		<div class={classes.container}>
			<Menu isOpen={isOpen()} toggleMenu={toggleMenu}/>
			<div class={classes.content}>
				<div class={classes.header}>
					<PanelLeft
						onClick={toggleMenu}
						size={20}
						class={classes.icon}
					/>
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
					<span class={`${classes.text} ${classes.header_text}`}>
						Welcome to Your Enhanced Notion Clone
					</span>
					<span class={`${classes.text} ${classes.subheader_text}`}>
						Start typing here to create your document. Press '/' for
						commands.
					</span>
				</div>
			</div>
		</div>
	)
}
