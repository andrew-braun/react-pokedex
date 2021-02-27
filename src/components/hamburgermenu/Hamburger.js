import React from "react"
import styles from "./hamburger.module.css"

export default function Hamburger({ menuIsOpen, setMenuIsOpen }) {
	console.log(menuIsOpen)
	return (
		<div
			className={styles.hamburgerContainer}
			onClick={() => setMenuIsOpen(!menuIsOpen)}
			onKeyDown={() => setMenuIsOpen(!menuIsOpen)}
			role="button"
			tabIndex="0"
		>
			<div />
			<div />
			<div />
		</div>
	)
}
