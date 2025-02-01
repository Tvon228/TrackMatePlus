import { createSignal } from "solid-js"

import Search from "lucide-solid/icons/search"

import classes from "./InboxComponent.module.sass"

export default function InboxComponent() {
	const [currentTab, setCurrentTab] = createSignal("allMail")

	const handleSwitch = (tab: string) => {
		setCurrentTab(tab)
	}

	const CardItems = [
		{
			name: "Vadim Pomelo",
			theme: "Metting",
			label: "Thank yo for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.",
		},
		{
			name: "Vitya Ass Whole",
			theme: "Re: Hello I'm Vadim",
			label: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
		},
		{
			name: "Yana My Love",
			theme: "Re: Hello I'm Vitya",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
		{
			name: "Yana",
			theme: "Re: Hello I'm Yana",
			label: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
		},
	]

	return (
		<div class={classes.content}>
			<div class={classes.header}>
				<div class={classes.textHeader}>Inbox</div>
				<div class={classes.switchMassage}>
					<div
						classList={{
							[classes.allMail]: true,
							[classes.active]: currentTab() === "allMail",
						}}
						onClick={() => handleSwitch("allMail")}
					>
						<div class={classes.textSwitch}>All mail</div>
					</div>
					<div
						classList={{
							[classes.unread]: true,
							[classes.active]: currentTab() === "unread",
						}}
						onClick={() => handleSwitch("unread")}
					>
						<div class={classes.textSwitch}>Unread</div>
					</div>
				</div>
			</div>
			<div class={classes.searchBlock}>
				<Search size={16} class={classes.icon} style={{color: "var(--icon-color)"}}/>
				<input class={classes.search} placeholder="Search" />
			</div>
			<div class={classes.cards}>
				{CardItems.map((items) => (
					<div class={classes.card}>
						<span class={classes.itemsName}>{items.name}</span>
						<span class={classes.itemsTheme}>{items.theme}</span>
						<span class={classes.message}>{items.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}
