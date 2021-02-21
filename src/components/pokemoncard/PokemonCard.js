import React from "react"
import styles from "./pokemoncard.module.css"

function PokemonCard({ pokemonStats, onClick, pokemonDetails }) {
	const { name, types, abilities, base_experience, sprites, id } = pokemonStats
	const { front_default } = sprites

	return (
		<button
			className={styles.pokemonCard}
			onClick={onClick}
			data-pokemon-id={id}
		>
			<div className={styles.pokemonCardName}>
				{name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
			</div>
			<div className={styles.pokemonCardImage}>
				<img src={front_default} alt={name} />
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
			<div className={styles.pokemonCardAbilities}>
				{abilities.map((item) => (
					<span
						className={styles.pokemonCardAbility}
						key={`${name}-${item.ability.name}`}
					>
						{item.ability.name}
					</span>
				))}
			</div>
			<div className={styles.pokemonCardBaseXP}>Base XP: {base_experience}</div>
		</button>
	)
}

export default PokemonCard
