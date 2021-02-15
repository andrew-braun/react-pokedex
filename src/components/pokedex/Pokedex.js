import { useEffect, useState } from "react"
import PokemonCard from "../pokemoncard/PokemonCard"
import styles from "./pokedex.module.css"

function Pokedex() {
	const [pokemonData, setPokemonData] = useState()
	const [pokemonCards, setPokemonCards] = useState()

	useEffect(() => {
		async function fetchPokemon(call) {
			try {
				const response = await fetch(call)
				const data = await response.json()
				await setPokemonData(data)
				console.log(data.results)
				const cards = await data.results.map((pokemon) => (
					<PokemonCard pokemonData={pokemon} key={`${pokemon.name}-key`} />
				))
				await setPokemonCards(cards)
			} catch (error) {
				console.log(error)
			}
		}
		fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=151")
	}, [])

	return <div className={styles.pokedex}>{pokemonCards}</div>
}

export default Pokedex
