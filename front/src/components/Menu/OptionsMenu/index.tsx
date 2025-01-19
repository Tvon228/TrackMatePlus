import classes from "./Options.module.sass"

import Settings from "lucide-solid/icons/settings"
import Help from "lucide-solid/icons/circle-help"

type OptionsMenuProps = {
	openModal: () => void
}

export default function OptionsMenu({openModal}: OptionsMenuProps ) {
	const options = [
		{ icon: Settings, label: "Settings", action: openModal },
		{ icon: Help, label: "Help" },
	]

	return (
		<div class={classes.options}>
			{options.map((items) => (
				<button
					class={classes.items}
					onClick={items.action || (() => {})}
				>
					<items.icon size={20} />
					{items.label}
				</button>
			))}
		</div>
	)
}
