import styles from "./pokemoncard.module.css"

function PokemonCard({ pokemonData }) {
	const { name, types, abilities, base_experience, sprites } = pokemonData
	const [ability1, ability2] = abilities.map((item) => item.ability.name)
	const { front_default } = sprites
	console.log(front_default)

	console.log(sprites)
	return (
		<div className={styles.pokemonCard}>
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
		</div>
	)
}

export default PokemonCard
