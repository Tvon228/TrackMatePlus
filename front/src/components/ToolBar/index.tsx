import classes from "./ToolBar.module.sass"

import Hash from "lucide-solid/icons/hash"
import List from "lucide-solid/icons/list"
import Code from "lucide-solid/icons/code"
import Quote from "lucide-solid/icons/quote"
import CheckSquare from "lucide-solid/icons/check-square"
import Table from "lucide-solid/icons/table"

export default function ToolBar({
	onCommand,
}: {
	onCommand: (cmd: string) => void
}) {
	const Buttons = [
		{ icons: Hash, command: "heading", tooltip: "Heading" },
		{ icons: List, command: "list", tooltip: "Bullet List" },
		{ icons: Code, command: "code", tooltip: "Code Block" },
		{ icons: Quote, command: "quote", tooltip: "Bloclquote" },
		{ icons: CheckSquare, command: "checkList", tooltip: "Checklist" },
		{ icons: Table, command: "table", tooltip: "Table" },
	]

	return (
		<div class={classes.container}>
			{Buttons.map((btn) => (
				<button
					class={classes.buttons}
					onClick={() => onCommand(btn.command)}
					title={btn.tooltip}
				>
					<btn.icons size={16} color="#ffffff"/>
				</button>
			))}
		</div>
	)
}
