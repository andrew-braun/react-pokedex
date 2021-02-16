import styles from "./sidebar.module.css"

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<header className={styles.sidebarHeader}>
				<div className={styles.sidebarTitle}></div>
			</header>
			<div className={styles.sidebarItems}></div>
		</aside>
	)
}

export default Sidebar
