import styles from "./pokemoncard.module.css"

function PokemonCard({ pokemonData, onClick }) {
	const { name, types, abilities, base_experience, sprites } = pokemonData
	const { front_default } = sprites

	return (
		<button className={styles.pokemonCard} onClick={onClick}>
			<div className={styles.pokemonCardName}>
				{name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
			</div>
			<div className={styles.pokemonCardImage}>
				<img src={front_default} alt={name} />
			</div>
			<div className={styles.pokemonCardTypes}>
				{types.map((item) => (
					<span className={styles.pokemonCardType}>{item.type.name}</span>
				))}
			</div>
			<div className={styles.pokemonCardAbilities}>
				{abilities.map((item) => (
					<span className={styles.pokemonCardAbility}>{item.ability.name}</span>
				))}
			</div>
			<div className={styles.pokemonCardBaseXP}>Base XP: {base_experience}</div>
		</button>
	)
}

export default PokemonCard
