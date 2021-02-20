import React, { useState, useEffect } from "react"
import Pokedex from "../../components/pokedex/Pokedex"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./pokedexcontainer.module.css"

function PokedexContainer() {
	const [pokemonData, setPokemonData] = useState({})
	const [pokemon, setPokemon] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])
	const [miniPokemonCards, setMiniPokemonCards] = useState([])

	// Populate initial Pokémon list
	useEffect(() => {
		// Reset state on page refresh
		setPokemon([])
		setPokemonCards([])

		async function fetchData(endpoint) {
			const response = await fetch(endpoint)
			const data = await response.json()
			return data
		}

		async function fetchPokemon() {
			// Get list of pokemon containing basic name/url data
			const basicPokemonList = await fetchData(
				"https://pokeapi.co/api/v2/pokemon?limit=21"
			)
			await setPokemonData(basicPokemonList)

			// Map through list of basic Pokémon data and make calls to each url to get individual Pokémon
			const detailedPokemonList = await Promise.all(
				basicPokemonList.results.map(async (item) => {
					const newPokemon = await fetchData(item.url)
					setPokemon((previousPokemon) => [...previousPokemon, newPokemon])

					return newPokemon
				})
			)
		}
		fetchPokemon()
	}, [])

	useEffect(() => {
		const mainCards = pokemon.map((pokemon) => {
			return (
				<PokemonCard pokemonStats={pokemon} key={`${pokemon.id}-card-key`} />
			)
		})
		setPokemonCards(mainCards)
	}, [pokemon])

	return (
		<div className={styles.pokedexContainer}>
			<div className={styles.pokedex}>
				<Pokedex pokemonCards={pokemonCards} />
			</div>
			<div className={styles.sidebar}>
				<Sidebar pokemonCards={miniPokemonCards} />
			</div>
		</div>
	)
}

export default PokedexContainer
