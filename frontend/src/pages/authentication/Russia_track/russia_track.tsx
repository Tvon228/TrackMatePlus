import classes from "./russia_track.module.sass"

import Select from "../../../components/Contex_menu/select"

export default function Russia_track() {
	const options = ["Россия", "Китай"]

	const handleSelect = (selected: string) => {
		console.log(`Вы выбрали: ${selected}`)
	}

	return (
		<div class={classes.container}>
			<div class={classes.content}>
				<span class={classes.header_text}>Отследить посылку</span>
				<span class={classes.info_text}>
					Введите трек-номер вашей посылки, чтобы узнать, где она
					находится
				</span>
				<div class={classes.main}>
					<div class={classes.function}>
						<input type="text" placeholder="Введите трек-код" />
						<Select
							options={options}
							onSelect={handleSelect}
						/>
					</div>
					<button class={classes.confirm}>Отследить</button>
				</div>
			</div>
		</div>
	)
}
