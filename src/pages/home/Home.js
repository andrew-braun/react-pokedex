import Layout from "../../components/layout/Layout"
import Pokedex from "../../components/pokedex/Pokedex"
import styles from "./home.module.css"

function Home() {
	return (
		<div className={styles.homePage}>
			<Layout>
				<Pokedex></Pokedex>
			</Layout>
		</div>
	)
}

export default Home
