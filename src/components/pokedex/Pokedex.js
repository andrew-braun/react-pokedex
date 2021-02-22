import React from "react"

import styles from "./pokedex.module.css"

function Pokedex({ pokemonCards }) {
	return <div className={styles.pokedex}>{pokemonCards}</div>
}

export default Pokedex
