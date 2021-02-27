import React from "react"
import styles from "./searchbar.module.css"

function SearchBar({ searchTerm, setSearchTerm }) {
	return (
		<div className={styles.searchbarContainer}>
			<input
				className={styles.searchbar}
				type="text"
				role="search"
				placeholder="Search for Pokémon by name, type, ability, or ID"
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			></input>
		</div>
	)
}

export default SearchBar
