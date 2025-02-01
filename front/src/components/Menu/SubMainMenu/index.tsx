import classes from "./SubMainMenu.module.sass"

import { For } from "solid-js"
import { subMenu } from "../Data"

import Plus from "lucide-solid/icons/plus"

export default function SubMenu() {
	return (
		<div class={classes.submain}>
			<div class={classes.pagesControl}>
				<span class={classes.title}>Pages</span>
				<button class={classes.btnNewPage}>
					<Plus size={16} style={{ color: "var(--icon-color)" }} />
				</button>
			</div>
			<For each={subMenu}>
				{(items) => (
					<button class={classes.items}>
						<items.icon size={20} />
						{items.label}
					</button>
				)}
			</For>
		</div>
	)
}
