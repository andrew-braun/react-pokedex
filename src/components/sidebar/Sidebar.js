import React from "react"
import styles from "./sidebar.module.css"

function Sidebar(props) {
	const { pokemonCards } = props
	return (
		<aside className={styles.sidebar}>
			<header className={styles.sidebarHeader}>
				<div className={styles.sidebarTitle}>Build Your Pokédeck!</div>
				<p className={styles.sidebarDescription}>
					Select Pokémon, then test them against a randomly selected set!
				</p>
			</header>
			<div className={styles.sidebarItems}>{pokemonCards}</div>
		</aside>
	)
}

export default Sidebar
