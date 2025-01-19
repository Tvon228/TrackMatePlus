import classes from "./SearchInput.module.sass"

interface SearchInputProps {
	searchText: string
	onSearchChange: (value: string) => void
	onClear: () => void
	isSearchOpen: boolean
}

export default function SearchInput(props: SearchInputProps) {
	return (
		<div
			classList={{
				[classes.search]: true,
				[classes.searchOpen]: props.isSearchOpen,
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
