import classes from "./Messenger.module.sass"

import Trash from "lucide-solid/icons/trash"
import Archive from "lucide-solid/icons/archive"
import Reply from "lucide-solid/icons/reply"
import AllReply from "lucide-solid/icons/reply-all"
import Forward from "lucide-solid/icons/forward"
import { For } from "solid-js"

export default function MessangerInbox() {
	const ControlItems = [{ icon: Trash }, { icon: Archive }]
	const MessageControlItems = [
		{ icon: Reply },
		{ icon: AllReply },
		{ icon: Forward },
	]

	return (
		<div class={classes.content}>
			<div class={classes.header}>
				<div class={classes.headerControl}>
					<For each={ControlItems}>
						{(items) => (
							<div class={classes.items}>
								<items.icon size={16} />
							</div>
						)}
					</For>
				</div>
				<div class={classes.headerControl}>
					<For each={MessageControlItems}>
						{(items) => (
							<div class={classes.items}>
								<items.icon size={16} />
							</div>
						)}
					</For>
				</div>
			</div>
			<div class={classes.notChoiceChat}>
				<span class={classes.notChoiceText}>Select a chat to start messaging</span>
			</div>
		</div>
	)
}
