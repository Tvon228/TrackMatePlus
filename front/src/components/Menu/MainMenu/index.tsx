import classes from "./MainMenu.module.sass"

import { For } from "solid-js"
import { mainMenu } from "../Data"

import User from "lucide-solid/icons/user"

type MainMenuProps = {
	active: string
	onNavigate: (path: string) => void
	onToggleSearch: () => void
	onToggleInbox: () => void
}

export default function MainMenu(props: MainMenuProps) {
	return (
		<div class={classes.header}>
			<button class={classes.btnAccount}>
				<User size={20} style={{ color: "#f1f5f9" }} />
				Your account
			</button>
			<div class={classes.btnMain}>
				<div class={classes.withPanel}>
					<For each={mainMenu}>
						{(item) => (
							<button
								classList={{
									[classes.items]: true,
									[classes.active]:
										props.active === item.path,
								}}
								onClick={() => {
									if (item.label === "Search") {
										props.onToggleSearch()
									} else if (item.label === "Inbox") {
										props.onToggleInbox()
									} else {
										props.onNavigate(item.path)
									}
								}}
							>
								<item.icon size={20} />
								{item.label}
							</button>
						)}
					</For>
				</div>
			</div>
		</div>
	)
}
