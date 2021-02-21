import React from "react"
import styles from "./layout.module.css"

function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<div className={styles.siteTitle}>React Pokédex</div>
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>Made with ❤️ by Andrew Braun</footer>
		</div>
	)
}

export default Layout
