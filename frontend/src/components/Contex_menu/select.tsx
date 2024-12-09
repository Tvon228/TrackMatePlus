import { createSignal, createEffect, onCleanup } from "solid-js"
import classes from "./select.module.sass"
import { ChevronsUpDown, Check } from "lucide-solid"

interface SelectProps {
	label?: string
	options: string[]
	onSelect?: (selected: string) => void
}

export default function Select({
	label = "Выбор страны",
	options,
	onSelect,
}: SelectProps) {
	const [branch, setBranch] = createSignal(false)
	const [selected, setSelected] = createSignal(label)

	const toggleSelect = () => setBranch(!branch())

	const handleSelect = (option: string) => {
		setSelected(option)
		onSelect?.(option)
		setBranch(false)
	}

	const textColor = () => {
		return selected() === label ? "#838287" : "white"
	}

	// Логика для закрытия меню при клике вне его области
	createEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!event.target) return
			const container = document.querySelector(`.${classes.container}`)
			if (container && !container.contains(event.target as Node)) {
				setBranch(false)
			}
		}
		document.addEventListener("click", handleClickOutside)
		onCleanup(() =>
			document.removeEventListener("click", handleClickOutside)
		)
	})

	return (
		<div class={classes.container}>
			<button
				class={classes.toggle}
				onClick={toggleSelect}
				style={{ color: textColor() }}
			>
				{selected()}
				<ChevronsUpDown size={14} />
			</button>

			{branch() && (
				<ul class={`${classes.dropdownMenu} ${classes.fadeIn}`}>
					{options.map((option) => (
						<li
							class={`${classes.dropdownMenuItem} ${
								selected() === option ? classes.selected : ""
							}`}
							onClick={() => handleSelect(option)}
						>
							{option}
							{selected() === option && <Check size={14} />}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
