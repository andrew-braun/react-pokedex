import React from "react"
import { SidebarItems } from "../sidebar/Sidebar"
import styles from "./hamburgermenu.module.css"

function HamburgerMenu({ pokemonCards }) {
	return (
		<div className={styles.hamburgerMenuContainer}>
			<div className={styles.hamburgerTitle}>Build Your Pokédeck!</div>
			<SidebarItems pokemonCards={pokemonCards} />
		</div>
	)
}

export default HamburgerMenu
