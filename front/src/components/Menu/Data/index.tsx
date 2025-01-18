import Search from "lucide-solid/icons/search"
import House from "lucide-solid/icons/house"
import Calendar from "lucide-solid/icons/calendar-days"
import File from "lucide-solid/icons/file-text"
import Inbox from "lucide-solid/icons/inbox"

export const mainMenu = [
	{ icon: Search, label: "Search", path: "/search" },
	{ icon: House, label: "Home", path: "/" },
	{ icon: Calendar, label: "Calendar", path: "/calendar" },
	{ icon: Inbox, label: "Inbox", path: "/inbox" },
]

export const subMenu = [
	{ icon: File, label: "Getting Started" },
	{ icon: File, label: "Project Ideas" },
]

