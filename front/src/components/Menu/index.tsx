import classes from "./Menu.module.sass"

import { createSignal } from "solid-js"

import Plus from "lucide-solid/icons/plus"
import User from "lucide-solid/icons/user"
import Search from "lucide-solid/icons/search"
import House from "lucide-solid/icons/house"
import Calendar from "lucide-solid/icons/calendar-days"
import File from "lucide-solid/icons/file-text"
import PanelLeft from "lucide-solid/icons/panel-left"
import Inbox from "lucide-solid/icons/inbox"
import Settings from "lucide-solid/icons/settings"
import Help from "lucide-solid/icons/circle-help"

export default function Menu() {
	const [isMenuOpen, setMenuOpen] = createSignal(true)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen())
	}

	const mainMenu = [
		{ icon: Search, label: "Search" },
		{ icon: House, label: "Home" },
		{ icon: Calendar, label: "Calendar" },
		{ icon: Inbox, label: "Inbox" },
	]

	const subMenu = [
		{ icon: File, label: "Getting Started" },
		{ icon: File, label: "Project Ideas" },
	]

	const options = [
		{ icon: Settings, label: "Settings" },
		{ icon: Help, label: "Help" },
	]

	return (
		<>
			<PanelLeft
				size={20}
				classList={{
					[classes.icon]: true,
					[classes.menu_open]: isMenuOpen(),
				}}
				onClick={toggleMenu}
			/>
			<div
				classList={{
					[classes.content]: true,
					[classes.menu_open]: isMenuOpen(),
				}}
			>
				<div class={classes.main}>
					<div class={classes.header}>
						<button class={classes.btn_acc}>
							<User size={20} style={{ color: "#f1f5f9" }} />
							Your account
						</button>
						<div class={classes.btns_main}>
							{mainMenu.map((items) => (
								<button class={classes.items}>
									<items.icon size={20} />
									{items.label}
								</button>
							))}
						</div>
					</div>
					<div class={classes.submain}>
						<div class={classes.pages_control}>
							<span class={classes.title}>Pages</span>
							<button class={classes.btn_np}>
								<Plus size={16} style={{ color: "#f1f5f9" }} />
							</button>
						</div>

						{subMenu.map((items) => (
							<button class={classes.items}>
								<items.icon size={20} />
								{items.label}
							</button>
						))}
					</div>
				</div>
				<div class={classes.options}>
					{options.map((items) => (
						<button class={classes.items}>
							<items.icon size={20} />
							{items.label}
						</button>
					))}
				</div>
			</div>
		</>
	)
}
