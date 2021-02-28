import React from "react"
import SearchBar from "../../components/searchbar/SearchBar"

import styles from "./pokedex.module.css"

function Pokedex({ pokemonCards, searchTerm, setSearchTerm }) {
	return (
		<div className={styles.pokedexComponentContainer}>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className={styles.pokedex}>{pokemonCards}</div>
		</div>
	)
}

export default Pokedex
