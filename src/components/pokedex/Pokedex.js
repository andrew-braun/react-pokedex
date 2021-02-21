import React from "react"
import ReactDOM from "react-dom"

import styles from "./pokedex.module.css"

function Pokedex({ pokemonCards }) {
	return <div className={styles.pokedex}>{pokemonCards}</div>
}

export default Pokedex
