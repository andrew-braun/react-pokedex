import { useEffect, useState } from "react"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import styles from "./pokedex.module.css"

function Pokedex() {
	const [pokemonData, setPokemonData] = useState()
	const [pokemonStats, setPokemonStats] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])

	useEffect(() => {
		// Make a call to get a single Pokemon's data
		async function fetchSinglePokemon(call) {
			try {
				const response = await fetch(call)
				const data = await response.json()
				console.log(data)
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
		fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=3")
	}, [])

	return <div className={styles.pokedex}>{pokemonCards}</div>
}

export default Pokedex
