import React from "react"
import Layout from "../../components/layout/Layout"
import PokedexContainer from "../../components/pokedexcontainer/PokedexContainer"
import styles from "./home.module.css"

function Home() {
	return (
		<Layout>
			<div className={styles.homePage}>
				<PokedexContainer />
			</div>
		</Layout>
	)
}

export default Home
