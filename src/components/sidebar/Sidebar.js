import styles from "./sidebar.module.css"

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<header className={styles.sidebarHeader}>
				<div className={styles.sidebarTitle}>Build Your Pokédeck!</div>
				<p className={styles.sidebarDescription}>
					Select up to 20 Pokémon, then test them against a randomly selected
					set!
				</p>
			</header>
			<div className={styles.sidebarItems}></div>
		</aside>
	)
}

export default Sidebar
