import React from "react"
import styles from "./sidebar.module.css"

function Sidebar(props) {
	const { pokemonCards } = props
	return (
		<aside className={styles.sidebar}>
			<header className={styles.sidebarHeader}>
				<div className={styles.sidebarTitle}>Build Your Pokédeck!</div>
			</header>
			<SidebarItems pokemonCards={pokemonCards} />
		</aside>
	)
}

function SidebarItems({ pokemonCards }) {
	return <div className={styles.sidebarItems}>{pokemonCards}</div>
}

export default Sidebar
export { SidebarItems }
