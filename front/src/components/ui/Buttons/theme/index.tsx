import { useTheme } from "../../../../Theme"

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			onClick={toggleTheme}
			class="theme-toggle"
			style={{
				background: "var(--button-hover)",
				color: "var(--text-color)",
				padding: "8px 12px",
				border: "none",
				"border-radius": "4px",
				cursor: "pointer",
			}}
		>
			{theme() === "dark" ? "☀️ Светлая" : "🌙 Тёмная"}
		</button>
	)
}
