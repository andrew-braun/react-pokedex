import styles from "./pokemoncard.module.css"

function SelectedPokemon({ pokemonData }) {
	const { name, base_experience, sprites } = pokemonData
	const { front_default } = sprites

	console.log(sprites)
	return (
		<div className={styles.pokemonCard}>
			<div className={styles.pokemonCardName}>
				{name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
			</div>
			<div className={styles.pokemonCardImage}>
				<img src={front_default} alt={name} />
			</div>
			<div className={styles.pokemonCardBaseXP}>Base XP: {base_experience}</div>
		</div>
	)
}

export default SelectedPokemon
