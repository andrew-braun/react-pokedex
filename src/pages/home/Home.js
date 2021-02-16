import Layout from "../../components/layout/Layout"
import Pokedex from "../../components/pokedex/Pokedex"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./home.module.css"

function Home() {
	return (
		<Layout>
			<div className={styles.homePage}>
				<div className={styles.pokedexContainer}>
					<Pokedex />
				</div>
				<div className={styles.sidebarContainer}>
					<Sidebar />
				</div>
			</div>
		</Layout>
	)
}

export default Home
