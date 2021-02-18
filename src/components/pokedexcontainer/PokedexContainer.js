import React, { useEffect, useState } from "react"
import Pokedex from "../../components/pokedex/Pokedex"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./pokedexcontainer.module.css"

function PokedexContainer() {
	const [pokemonList, setPokemonList] = useState()
	const [pokemonDetails, setPokemonDetails] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])
	const [selectedPokemon, setSelectedPokemon] = useState([])

	const handlePokemonCardClick = (event) => {
		const pokemonId = event.target.dataset.pokemonId
		// console.log(pokemonId)
		const pokemonInfo = pokemonDetails.find((item) => item.id === pokemonId)
		console.log(pokemonInfo)
		return pokemonInfo
	}

	useEffect(() => {
		async function fetchSinglePokemon(call) {
			try {
				const response = await fetch(call)
				const data = await response.json()
				// Store Pokemon data in an array of objects
				await setPokemonDetails((previousPokemonDetails) => [
					...previousPokemonDetails,
					data,
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
				await setPokemonList(data)

				await data.results.map((item) => fetchSinglePokemon(item.url))
			} catch (error) {
				console.log(error)
			}
		}
		fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=21")
	}, [])

	useEffect(() => {
		const cards = pokemonDetails.map((pokemon) => {
			const card = (
				<PokemonCard
					pokemonStats={pokemon}
					onClick={handlePokemonCardClick}
					// key={`${currentPokemon.id}-key`}
				/>
			)
			return card
		})

		setPokemonCards(cards)
	})

	// Store Pokemon in card component form for rendering

	return (
		<div className={styles.pokedexContainer}>
			<div className={styles.pokedex}>
				<Pokedex pokemonCards={pokemonCards} />
			</div>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
		</div>
	)
}

export default PokedexContainer
