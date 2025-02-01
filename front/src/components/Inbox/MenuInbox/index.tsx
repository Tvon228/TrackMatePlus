import classes from "./MenuInbox.module.sass"

import { For } from "solid-js"

import Inbox from "lucide-solid/icons/inbox"
import File from "lucide-solid/icons/file"
import Send from "lucide-solid/icons/send"
import Trash from "lucide-solid/icons/trash"
import Archive from "lucide-solid/icons/archive"

export default function MenuInbox() {
	const MenuItems = [
		{ icon: Inbox, label: "Inbox" },
		{ icon: File, label: "Drafts" },
		{ icon: Send, label: "Sent" },
		{ icon: Trash, label: "Trash" },
		{ icon: Archive, label: "Archive" },
	]

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<div class={classes.selectInbox}>
					<div class={classes.selectBtn}>perunov996@gmail.ru</div>
				</div>
				<div class={classes.menuItems}>
					<For each={MenuItems}>
						{(items) => (
							<div class={classes.items}>
								<items.icon size={20} />
								{items.label}
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	)
}
