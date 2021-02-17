import React, { useEffect, useState } from "react"
import Pokedex from "../../components/pokedex/Pokedex"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./pokedexcontainer.module.css"

function PokedexContainer() {
	const [pokemonData, setPokemonData] = useState()
	const [pokemonStats, setPokemonStats] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])
	const [selectedPokemon, setSelectedPokemon] = useState([])

	useEffect(() => {
		// Make a call to get a single Pokemon's data
		async function fetchSinglePokemon(call) {
			try {
				const response = await fetch(call)
				const data = await response.json()
				// Store Pokemon data in an array of objects
				await setPokemonStats((previousPokemonStats) => [
					previousPokemonStats,
					data,
				])

				// Store Pokemon in card component form for rendering
				const card = <PokemonCard pokemonData={data} key={`${data.id}-key`} />
				await setPokemonCards((previousPokemonCards) => [
					previousPokemonCards,
					card,
				])
			} catch (error) {
				console.log(error)
			}
		}

		// Fetch a list of all pokemon
		async function fetchPokemonList(call) {
			try {
				const response = await fetch(call)
				const data = await response.json()
				await setPokemonData(data)

				await data.results.map((pokemon) => fetchSinglePokemon(pokemon.url))
			} catch (error) {
				console.log(error)
			}
		}
		fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=21")
	}, [])

	function handlePokemonCardClick(event) {
		console.log(event.target)
	}

	return (
		<div className={styles.pokedexContainer}>
			<div className={styles.pokedex}>
				<Pokedex pokemonCards={pokemonCards} />
			</div>
			<div className={styles.sidebar}>
				<Sidebar onClick={handlePokemonCardClick} />
			</div>
		</div>
	)
}

export default PokedexContainer
