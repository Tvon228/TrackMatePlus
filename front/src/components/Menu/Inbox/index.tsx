import classes from "./Inbox.module.sass"

import { createSignal } from "solid-js"

interface InboxProps {
	isInboxOpen: boolean
}

export default function Inbox(props: InboxProps) {
	const [currentTab, setCurrentTab] = createSignal("allMail")

	const handleSwitch = (tab: string) => {
		setCurrentTab(tab)
	}

	return (
		<div
			classList={{
				[classes.container]: true,
				[classes.containerOpen]: props.isInboxOpen,
			}}
		>
			<div class={classes.content}>
				<div class={classes.header}>
					<div class={classes.textHeader}>Inbox</div>
					<div class={classes.switchMassage}>
						<div
							classList={{
								[classes.allMail]: true,
								[classes.active]: currentTab() === "allMail",
							}}
							onClick={() => handleSwitch("allMail")}
						>
							<div class={classes.textSwitch}>All mail</div>
						</div>
						<div
							classList={{
								[classes.unread]: true,
								[classes.active]: currentTab() === "unread",
							}}
							onClick={() => handleSwitch("unread")}
						>
							<div class={classes.textSwitch}>Unread</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
