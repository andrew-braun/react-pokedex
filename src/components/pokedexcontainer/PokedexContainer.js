import React, { useEffect, useRef, useState } from "react"
import MiniPokemonCard from "../../components/minipokemoncard/MiniPokemonCard"
import Pokedex from "../../components/pokedex/Pokedex"
import PokemonCard from "../../components/pokemoncard/PokemonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./pokedexcontainer.module.css"

function PokedexContainer() {
	const [pokemonList, setPokemonList] = useState()
	const [pokemonDetails, setPokemonDetails] = useState([])
	const [pokemonCards, setPokemonCards] = useState([])
	const [selectedPokemon, _setSelectedPokemon] = useState([])
	const [miniPokemonCards, setMiniPokemonCards] = useState([])

	let selectedPokemonRef = useRef(selectedPokemon)

	const setSelectedPokemon = (arr, obj) => {
		console.log(arr)
		// keep updated
		if (obj) {
			console.log("add")
			_setSelectedPokemon([...arr, obj])
			selectedPokemonRef.current.push(obj)
		} else {
			console.log("del")
			console.log(arr)

			_setSelectedPokemon([...arr])
			selectedPokemonRef.current = [...arr]
			console.log(selectedPokemon)
		}
	}

	useEffect(() => {
		setPokemonList([])
		setPokemonDetails([])
		setPokemonCards([])

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
		return fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=21")
	}, [])

	useEffect(() => {
		function generateCards() {
			const cards = pokemonDetails.map((pokemon) => {
				const card = (
					<PokemonCard
						pokemonStats={pokemon}
						pokemonDetails={pokemonDetails}
						selectedPokemon={selectedPokemon}
						onClick={handlePokemonCardClick}
						key={`${pokemon.name}-key`}
					/>
				)
				return card
			})
			setPokemonCards(cards)
		}
		return generateCards()
	}, [pokemonDetails])

	useEffect(() => {
		const miniCards = selectedPokemon.map((pokemon) => {
			const card = (
				<MiniPokemonCard
					pokemonStats={pokemon}
					onClick={handleMiniPokemonCardClick}
					key={`${pokemon.name}-mini-key`}
				/>
			)
			return card
			// setMiniPokemonCards([...miniPokemonCards, card])
		})
		setMiniPokemonCards([...miniCards])
	}, [selectedPokemon])

	const handlePokemonCardClick = (event) => {
		const parentCard = event.target.closest("button")
		const pokemonId = parentCard.dataset.pokemonId

		const pokemonInfo = pokemonDetails.find(
			(item) => Number(item.id) === Number(pokemonId)
		)

		if (
			!selectedPokemon.some((item) => Number(item.id) === Number(pokemonId))
		) {
			setSelectedPokemon(selectedPokemon, pokemonInfo)
		}

		return pokemonInfo
	}

	function handleMiniPokemonCardClick(event) {
		const parentCard = event.target.closest(".mini-pokemon-card")

		const pokemonId = parentCard.dataset.pokemonId

		const filteredPokemon = selectedPokemon.filter(
			(item) => Number(item.id) !== Number(pokemonId)
		)
		console.log(filteredPokemon)

		setSelectedPokemon(filteredPokemon)
	}
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
