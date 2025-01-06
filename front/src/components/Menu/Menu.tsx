import classes from "./Menu.module.sass"

import { createSignal, Show } from "solid-js"

import Plus from "lucide-solid/icons/plus"
import User from "lucide-solid/icons/user"
import Search from "lucide-solid/icons/search"
import House from "lucide-solid/icons/house"
import Calendar from "lucide-solid/icons/calendar-days"
import File from "lucide-solid/icons/file-text"

interface MenuProps {
	isOpen: boolean
	toggleMenu: () => void
}

export default function Menu(props: MenuProps) {
	return (
		<div class={classes.content}>
			<div class={classes.header}>
				<button class={classes.btn_acc}>
					<User size={16} style={{ color: "#f1f5f9" }} />
					Your account
				</button>
				<div class={classes.btns_main}>
					<button class={classes.items}>
						<Search size={16} />
						Search
					</button>
					<button class={classes.items}>
						<House size={16} />
						Home
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
					<Calendar size={16} />
					Calendar
				</button>
				<button class={classes.items}>
					<File size={16} />
					Getting Started
				</button>
				<button class={classes.items}>
					<File size={16} />
					Project Ideas
				</button>
			</div>
		</div>
	)
}
