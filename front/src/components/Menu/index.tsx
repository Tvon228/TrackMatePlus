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
				<div class={classes.header}>
					<button class={classes.btn_acc}>
						<User size={20} style={{ color: "#f1f5f9" }} />
						Your account
					</button>
					<div class={classes.btns_main}>
						<button class={classes.items}>
							<Search size={20} />
							Search
						</button>
						<button class={classes.items}>
							<House size={20} />
							Home
						</button>
						<button class={classes.items}>
							<Calendar size={20} />
							Calendar
						</button>
						<button class={classes.items}>
							<Inbox size={20} />
							Calendar
						</button>
					</div>
				</div>
				<div class={classes.submain}>
					<div class={classes.pages_control}>
						<span class={classes.title}>Pages</span>
						<button class={classes.btn_np}>
							<Plus size={16} style={{ color: "#f1f5f9" }} />
							New page
						</button>
					</div>

					<button class={classes.items}>
						<File size={20} />
						Getting Started
					</button>
					<button class={classes.items}>
						<File size={20} />
						Project Ideas
					</button>
				</div>
				<div class={classes.options}>
					<button class={classes.items}>
						<Settings size={20} />
						Settings
					</button>
					<button class={classes.items}>
						<Help size={20} />
						Help
					</button>
				</div>
			</div>
		</>
	)
}
