import React, { useState } from "react"
import { SidebarItems } from "../sidebar/Sidebar"
import styles from "./hamburgermenu.module.css"

function HamburgerMenu({ pokemonCards, menuIsOpen, setMenuIsOpen }) {
	const body = document.querySelector("body")
	// if (menuIsOpen) {
	// 	body.classList.add("fixed-height")
	// } else {
	// 	body.classList.remove("fixed-height")
	// }
	const hamburgerMenuContainer = menuIsOpen
		? `${styles.hamburgerMenuContainer} ${styles.hamburgerMenuOpen}`
		: `${styles.hamburgerMenuContainer} ${styles.hamburgerMenuClosed}`
	return (
		<div className={hamburgerMenuContainer}>
			<div className={styles.hamburgerTitle}>Build Your Pokédeck!</div>
			<SidebarItems pokemonCards={pokemonCards} />
		</div>
	)
}

export default HamburgerMenu
