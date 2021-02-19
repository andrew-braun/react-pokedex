import styles from "./minipokemoncard.module.css"

function MiniPokemonCard({ pokemonStats, onClick, pokemonDetails }) {
	const { name, types, abilities, base_experience, sprites, id } = pokemonStats
	const { front_default } = sprites
	return (
		<div
			className={`${styles.pokemonCard} mini-pokemon-card`}
			id={id}
			onClick={onClick}
			data-pokemon-id={id}
		>
			<div className={styles.pokemonCardName}>
				{name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
			</div>
			<div className={styles.pokemonCardImageContainer}>
				<img
					src={front_default}
					alt={name}
					className={styles.pokemonCardImage}
				/>
			</div>
			<div className={styles.pokemonCardTypes}>
				{types.map((item) => (
					<span
						className={styles.pokemonCardType}
						key={`${name}-${item.type.name}`}
					>
						{item.type.name}
					</span>
				))}
			</div>

			<div className={styles.pokemonCardBaseXP}>Base XP: {base_experience}</div>
		</div>
	)
}

export default MiniPokemonCard
