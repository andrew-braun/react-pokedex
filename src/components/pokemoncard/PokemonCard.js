import styles from "./pokedex.module.css"

function PokemonCard() {
	return <div className={styles.pokemoncard}>{pokemonCards}</div>
}

export default PokemonCard
