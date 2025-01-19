import classes from "./SearchInput.module.sass"

import { createEffect } from "solid-js"

interface SearchInputProps {
	searchText: string
	onSearchChange: (value: string) => void
	onClear: () => void
	isOpen: boolean
}

export default function SearchInput(props: SearchInputProps) {
	createEffect(() => {
		console.log("isOpen changed to:", props.isOpen)
	})

	return (
		<div
			classList={{
				[classes.search]: true,
				[classes.searchOpen]: props.isOpen,
			}}
		>
			<div class={classes.searchWrapper}>
				<input
					type="text"
					class={classes.searchInput}
					placeholder="Enter text to search..."
					value={props.searchText}
					onInput={(e) => props.onSearchChange(e.currentTarget.value)}
				/>
				{props.searchText && (
					<button
						class={classes.clearBtn}
						onClick={props.onClear}
						aria-label="Clear search"
					>
						✕
					</button>
				)}
			</div>
		</div>
	)
}
