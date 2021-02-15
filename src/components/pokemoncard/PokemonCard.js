import styles from "./pokemoncard.module.css"

function PokemonCard({ pokemonData }) {
	const { name } = pokemonData
	return <div className={styles.pokemoncard}>{name}</div>
}

export default PokemonCard
