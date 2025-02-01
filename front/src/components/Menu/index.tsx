import classes from "./Menu.module.sass"

import { createSignal } from "solid-js"
import { useNavigate } from "@solidjs/router"

import PanelLeft from "lucide-solid/icons/panel-left"

import ModalSettings from "../ModalSettings"
import MainMenu from "./MainMenu"
import SubMenu from "./SubMainMenu"
import OptionsMenu from "./OptionsMenu"
import SearchInput from "./SearchInput"
import Inbox from "../Inbox"

export default function Menu() {
	const [isMenuOpen, setMenuOpen] = createSignal(true)
	const [isModalOpen, setModalOpen] = createSignal(false)
	const [isInboxOpen, setInboxOpen] = createSignal(false)
	const [isSearchOpen, setSearchOpen] = createSignal(false)
	const [active, setActive] = createSignal("/")
	const [searchText, setSearchText] = createSignal("")

	const navigate = useNavigate()

	const toggleSearch = () => {
		setSearchOpen(!isSearchOpen())
		if (isInboxOpen()) {
			setInboxOpen(false) 
		}
	}

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen())
		if (isSearchOpen()) {
			setSearchOpen(false)
		} else if (isInboxOpen()) {
			setInboxOpen(false)
		}
	}

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
		if (isSearchOpen()) {
			setSearchOpen(false)
		}
	}
	
	const openInbox = () => {
		setInboxOpen(true)
	}

	const closeInbox = () => {
		setInboxOpen(!isInboxOpen())
		if (isSearchOpen()) {
			setSearchOpen(false)
		}
	}

	const handleNavigation = (href: string) => {
		setActive(href)
		navigate(href)
	}

	return (
		<>
			<PanelLeft
				size={20}
				classList={{
					[classes.icon]: true,
					[classes.menuOpen]: isMenuOpen(),
				}}
				onClick={toggleMenu}
			/>
			<div
				classList={{
					[classes.content]: true,
					[classes.menuOpen]: isMenuOpen(),
				}}
			>
				<div class={classes.main}>
					<MainMenu
						active={active()}
						onNavigate={handleNavigation}
						onToggleSearch={toggleSearch}
						onToggleInbox={closeInbox}
					/>
					<SearchInput
						searchText={searchText()}
						onSearchChange={setSearchText}
						onClear={() => setSearchText("")}
						isSearchOpen={isSearchOpen()}
					/>
					<SubMenu />
				</div>
				<OptionsMenu openModal={openModal} />
			</div>
			{isModalOpen() && <ModalSettings onClose={closeModal} />}
			{isInboxOpen() && <Inbox onInboxClose={closeInbox} />}
		</>
	)
}
