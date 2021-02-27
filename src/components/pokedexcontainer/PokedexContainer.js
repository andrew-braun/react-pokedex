import React, { useState, useEffect } from "react"
import Pokedex from "../../components/pokedex/Pokedex"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import MiniPokemonCard from "../../components/minipokemoncard/MiniPokemonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import HamburgerMenuContainer from "../hamburgermenu/HamburgerMenuContainer"
import styles from "./pokedexcontainer.module.css"

function PokedexContainer() {
	const [pokemonData, setPokemonData] = useState({})
	const [pokemon, setPokemon] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])
	const [miniPokemonCards, setMiniPokemonCards] = useState([])
	const [selectedPokemon, setSelectedPokemon] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

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
			return detailedPokemonList
		}
		fetchPokemon()
	}, [])

	useEffect(() => {
		// Regenerate list of pokemon cards every time the list of pokemon is updated
		const mainCards = pokemon
			.filter((pokemon) => {
				const filterTraits = [
					pokemon.name.toLowerCase(),
					pokemon.id.toString(),
					pokemon.types
						.map((type) => {
							return type.type.name
						})
						.join(" "),
					pokemon.abilities
						.map((ability) => {
							return ability.ability.name
						})
						.join(" "),
				]

				return filterTraits.some((trait) => {
					return trait.includes(searchTerm.toLowerCase())
				})
			})
			.map((pokemon) => {
				return (
					<PokemonCard
						pokemonStats={pokemon}
						onClick={(event) => handlePokemonClick(event)}
						key={`${pokemon.id}-card-key`}
					/>
				)
			})
		setPokemonCards(mainCards)
	}, [pokemon, searchTerm])

	useEffect(() => {
		// Watch seletedPokemon array for changes and update based on it
		function updateMiniPokemonCards() {
			const miniCards = selectedPokemon.map((pokemon) => {
				const miniPokemonCard = (
					<MiniPokemonCard
						pokemonStats={pokemon}
						onClick={handleMiniPokemonClick}
						key={`mini-pokemon-${pokemon.id}`}
					/>
				)
				return miniPokemonCard
			})

			setMiniPokemonCards(miniCards)
		}
		updateMiniPokemonCards()
	}, [selectedPokemon])

	function handlePokemonClick(event) {
		const element = event.target.closest("button")
		const pokemonId = Number(element.dataset.pokemonId)
		const matchingPokemon = pokemon.find((item) => item.id === pokemonId)

		setSelectedPokemon((previousSelectedPokemon) => {
			if (!previousSelectedPokemon.some((item) => item.id === pokemonId)) {
				return [...previousSelectedPokemon, matchingPokemon]
			} else {
				return previousSelectedPokemon
			}
		})
	}

	function handleMiniPokemonClick(event) {
		const element = event.target.closest(".mini-pokemon-card")
		const pokemonId = Number(element.dataset.pokemonId)

		setSelectedPokemon((previousSelectedPokemon) => {
			const newArray = previousSelectedPokemon.filter(
				(pokemon) => pokemon.id !== pokemonId
			)
			return newArray
		})

		const matchingPokemon = selectedPokemon.find(
			(item) => item.id === pokemonId
		)
	}
	return (
		<div className={styles.pokedexContainer}>
			<div className={styles.pokedex}>
				<Pokedex pokemonCards={pokemonCards} setSearchTerm={setSearchTerm} />
			</div>
			<div className={styles.sidebar}>
				<Sidebar pokemonCards={miniPokemonCards} />
			</div>
			<HamburgerMenuContainer pokemonCards={miniPokemonCards} />
		</div>
	)
}

export default PokedexContainer
