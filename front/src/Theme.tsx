import { createContext, createSignal, useContext, ParentProps } from "solid-js"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
	theme: () => Theme
	toggleTheme: () => void
}>()

export function ThemeProvider(props: ParentProps) {
	const [theme, setTheme] = createSignal<Theme>(
		(localStorage.getItem("theme") as Theme) ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light")
	)

	const toggleTheme = () => {
		const newTheme = theme() === "dark" ? "light" : "dark"
		setTheme(newTheme)
		localStorage.setItem("theme", newTheme)
		document.documentElement.setAttribute("data-theme", newTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context)
		throw new Error("useTheme must be used within a ThemeProvider")
	return context
}
