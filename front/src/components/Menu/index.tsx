import classes from "./Menu.module.sass"

import { createSignal } from "solid-js"
import { useNavigate } from "@solidjs/router"

import PanelLeft from "lucide-solid/icons/panel-left"
import Plus from "lucide-solid/icons/plus"
import User from "lucide-solid/icons/user"
import Settings from "lucide-solid/icons/settings"
import Help from "lucide-solid/icons/circle-help"

import { mainMenu, subMenu } from "./Data"

import ModalSettings from "../ModalSettings"

export default function Menu() {
	const [isMenuOpen, setMenuOpen] = createSignal(true)
	const [isModalOpen, setModalOpen] = createSignal(false)
	const [isSearchOpen, setSearchOpen] = createSignal(false)
	const [active, setActive] = createSignal("/")
	const [searchText, setSearchText] = createSignal("")

	const navigate = useNavigate()

	const toggleSearch = () => {
		console.log(isSearchOpen())
		setSearchOpen(!isSearchOpen())
	}

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen())
	}

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const handleNavigation = (href: string) => {
		setActive(href)
		navigate(href)
	}

	const options = [
		{ icon: Settings, label: "Settings", action: openModal },
		{ icon: Help, label: "Help" },
	]

	return (
		<>
			<PanelLeft
				size={20}
				classList={{
					[classes.icon]: true,
					[classes.menu_open]: isMenuOpen(),
				}}
				onClick={toggleMenu}
			/>
			<div
				classList={{
					[classes.content]: true,
					[classes.menu_open]: isMenuOpen(),
				}}
			>
				<div class={classes.main}>
					<div class={classes.header}>
						<button class={classes.btn_acc}>
							<User size={20} style={{ color: "#f1f5f9" }} />
							Your account
						</button>
						<div class={classes.btns_main}>
							<div class={classes.with_panel}>
								{mainMenu.map((items) => (
									<button
										classList={{
											[classes.items]: true,
											[classes.active]:
												active() === items.path,
										}}
										onClick={() => {
											if (items.label === "Search")
												toggleSearch()
											else handleNavigation(items.path)
										}}
									>
										<items.icon size={20} />
										{items.label}
									</button>
								))}
							</div>
						</div>
					</div>
					<div
						classList={{
							[classes.search]: true,
							[classes.search_open]: isSearchOpen(),
						}}
					>
						<div class={classes.searchWrapper}>
							<input
								type="text"
								class={classes.searchInput}
								placeholder="Enter text to search..."
								value={searchText()}
								onInput={(e) =>
									setSearchText(e.currentTarget.value)
								}
							/>
							{searchText() && (
								<button
									class={classes.clearBtn}
									onClick={() => setSearchText("")}
									aria-label="Clear search"
								>
									✕
								</button>
							)}
						</div>
					</div>
					<div class={classes.submain}>
						<div class={classes.pages_control}>
							<span class={classes.title}>Pages</span>
							<button class={classes.btn_np}>
								<Plus size={16} style={{ color: "#f1f5f9" }} />
							</button>
						</div>

						{subMenu.map((items) => (
							<button class={classes.items}>
								<items.icon size={20} />
								{items.label}
							</button>
						))}
					</div>
				</div>

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
			</div>
			{isModalOpen() && <ModalSettings onClose={closeModal} />}
		</>
	)
}
