import classes from "./MainButton.module.sass"

import Search from "lucide-solid/icons/search"
import House from "lucide-solid/icons/house"
import Calendar from "lucide-solid/icons/calendar-days"
import Inbox from "lucide-solid/icons/inbox"

export default function MainButton() {
	return (
		<div class={classes.container}>
			<button class={classes.items}>
				<Search size={20} />
				<label>Search</label>
			</button>
			<button class={classes.items}>
				<House size={20} />
				<label>House</label>
			</button>
			<button class={classes.items}>
				<Calendar size={20} />
				<label>Calendar</label>
			</button>
			<button class={classes.items}>
				<Inbox size={20} />
				<label>Inbox</label>
			</button>
		</div>
	)
}
